import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import Loader from '../../common/Loader';
import CartProductItem from '../components/CartProductItem';
import CartDetailed from '../components/CartDetailed';
import Tabs from '../../common/Tabs';
import PersonalData from '../components/PersonalData';
import DeliveryData from '../components/DeliveryData';
import Layout from '../../layout/containers/Layout';
import {
  fetchCart,
  removeCartProduct,
  increaseCartProductQty,
  decreaseCartProductQty,
  order,
  resetIsDone,
} from '../../../actions';
import { getTotalCartProductQty, getTotalCartProductPrice } from '../../../selectors';
import Done from '../components/Done';

class Cart extends Component{
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'person',
      formErrors: {
        person: {},
        delivery: {}
      },
      fields: {
        person: {},
        delivery: {}
      },
    };

    this.handleValidation = this.handleValidation.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.onClickTabItem = this.onClickTabItem.bind(this);
    this.remove = this.remove.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.handlePersonData = this.handlePersonData.bind(this);
    this.handleDeliveryData = this.handleDeliveryData.bind(this);
    this.handleLoadPersonData = this.handleLoadPersonData.bind(this);
    this.handleLoadDeliveryData = this.handleLoadDeliveryData.bind(this);
  }

  componentDidMount() {
    const { fetchCart, user } = this.props;
    // if (!R.isEmpty(user)) {
    //   fetchCart();
    // }
    fetchCart();
  }

  componentWillUnmount() {
    this.props.resetIsDone();
  }

  emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  phoneRegex = RegExp(
      /^[0-9\b]+$/
  );

  handleValidation = () => {
    const { fields, formErrors, activeTab } = this.state;
    let formIsValid = true;

    const orderType = fields[activeTab];
    const orderTypeErrors = formErrors[activeTab];

    for (const prop in orderType) {
      if (orderType.hasOwnProperty(prop)) {
        if (!orderType[prop]) {
          formIsValid = false;
          orderTypeErrors[prop] = 'должно быть заполнено';
        } else {
          switch (prop) {
            case 'firstName':
            case 'lastName':
             if (!orderType[prop].match(/^[a-zA-Zа-яА-Я]+$/)) {
               formIsValid = false;
               orderTypeErrors[prop] = 'только буквы';
             }
             break;
            case 'email':
              if(!this.emailRegex.test(orderType.email)){
                formIsValid = false;
                orderTypeErrors[prop] = 'email не валиден';
              }
              break;
            case 'phone':
              if(!this.phoneRegex.test(orderType.phone)){
                formIsValid = false;
                orderTypeErrors[prop] = 'телефон не валиден';
              }
              break;
            default:
              break;
          }
        }
      }
    }

    this.setState({
      formErrors: {...this.state.formErrors, [activeTab]: orderTypeErrors},
    });
    return formIsValid;
  };

  submitForm = (e) => {
    e.preventDefault();
    const { fields } = this.state;
    if(this.handleValidation()){
      this.props.order(fields, this.props.cart);
    }
  };

  handlePersonData (field, e) {
    this.setState({
      fields: {...this.state.fields, person: {...this.state.fields.person, [field]: e.target.value}},
      formErrors: {...this.state.formErrors, person: {...this.state.formErrors.person, [field]: ''}},
    });
  }

  handleDeliveryData(field, e) {
    this.setState({
      fields: {...this.state.fields, delivery: {...this.state.fields.delivery, [field]: e.target.value}},
      formErrors: {...this.state.formErrors, delivery: {...this.state.formErrors.delivery, [field]: ''}},
    });
  }

  handleLoadPersonData(field) {
    this.setState(prevState => ({
      fields: {...prevState.fields, person: {...prevState.fields.person, [field]: prevState.fields.person[field] || ''}},
    }));
  }

  handleLoadDeliveryData(field) {
    this.setState(prevState=> ({
      fields: {...prevState.fields, delivery: {...prevState.fields.delivery, [field]:  prevState.fields.delivery[field] || ''}},
    }));
  }

  onClickTabItem = (activeTab) => {
    this.setState({
      activeTab: activeTab,
      formErrors: activeTab !== 'person' ? {...this.state.formErrors, delivery: {}} : this.state.formErrors
    });
  };

  remove = (product) => {
    this.props.removeCartProduct(product);
  };

  increase = (product) => {
    this.props.increaseCartProductQty(product);
  };

  decrease = (product) => {
    if (product.quantity > 1) {
      this.props.decreaseCartProductQty(product);
    }
  };

  render() {

    console.log('RENDER <Cart>');

    const { cart, fetching, totalQuantity, totalPrice, isDone } = this.props;
    const { formErrors, fields } = this.state;

    return (
      <Layout>
        <div className="cart">

          <div className="cart-main">
            {
              fetching && <Loader />
            }
            {
              !fetching && isDone && <Done/>
            }
            {
              !fetching && !isDone && (!cart || R.isEmpty(cart)) && (
                <div className="cart-no-product">В вашей корзине пока нет товаров</div>
              )
            }
            {
              !fetching && !isDone && cart.length > 0 && (
                <Fragment>
                  <div className="cart-content">
                    <div className="cart-content-products">
                      {
                        cart && cart.length > 0 && cart.map((product, i) => {
                          return <CartProductItem
                            key={i}
                            product={product}
                            removeProduct={this.remove}
                            increaseProductQuantity={this.increase}
                            decreaseProductQuantity={this.decrease} />;
                        })
                      }
                    </div>

                    <div className="cart-summary-order">
                      <CartDetailed qty={totalQuantity} price={totalPrice} checkout={this.submitForm}/>

                      <div className="order">
                        <div className="order-container">
                          <div className="order-type">
                            <div className="order-type-title">Выберите, как хотите получить заказ</div>
                            <Tabs onClick={this.onClickTabItem} activeTab={this.state.activeTab} >
                              <div label="Самовывоз" id="person">
                                <PersonalData errors={formErrors.person} values={fields.person} onChange={this.handlePersonData} onLoad={this.handleLoadPersonData}/>
                              </div>
                              <div label="Доставка по адресу" id="delivery">
                                <PersonalData errors={formErrors.person} values={fields.person} onChange={this.handlePersonData} onLoad={this.handleLoadPersonData}/>
                                <DeliveryData errors={formErrors.delivery} values={fields.delivery} onChange={this.handleDeliveryData} onLoad={this.handleLoadDeliveryData}/>
                              </div>
                            </Tabs>
                          </div>
                        </div>

                        <div className="cart-section-note">
                          Поможем оформить заказ, если что-то пошло не так. Звоните
                          <a href="tel:89202937264">+7 (920) 293-72-64</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )
            }
          </div>
        </div>
      </Layout>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  isDone: PropTypes.bool.isRequired,
  resetIsDone: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  fetchCart: PropTypes.func.isRequired,
  order: PropTypes.func.isRequired,
  totalQuantity: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removeCartProduct: PropTypes.func.isRequired,
  increaseCartProductQty: PropTypes.func.isRequired,
  decreaseCartProductQty: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchCart,
  removeCartProduct,
  increaseCartProductQty,
  decreaseCartProductQty,
  order,
  resetIsDone,
};

const mapStateToProps = (state, ownProps) => ({
  cart: state.cart.data,
  isDone: state.cart.isDone,
  user: state.user.data,
  fetching: state.cart.fetching,
  errors: state.cart.errors,
  totalQuantity: getTotalCartProductQty(state),
  totalPrice: getTotalCartProductPrice(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);