import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import Breadcrumbs from '../../common/Breadcrumbs';
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
} from '../../../actions';
import { getTotalCartProductQty, getTotalCartProductPrice } from '../../../selectors';

class Cart extends Component{
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'Самовывоз',
      formErrors: {},
      fields: {},
    };

    this.handleValidation = this.handleValidation.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClickTabItem = this.onClickTabItem.bind(this);
    this.remove = this.remove.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  componentDidMount() {
    const { fetchCart, user } = this.props;
    if (!R.isEmpty(user)) {
      fetchCart();
    }
  }

  emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

  handleValidation = () => {
    const { fields, formErrors, activeTab } = this.state;
    let formIsValid = true;

    if(!fields['firstName']){
      formIsValid = false;
      formErrors['firstName'] = 'должно быть заполнено';
    }

    if(typeof fields['firstName'] !== 'undefined'){
      if(!fields['firstName'].match(/^[a-zA-Zа-яА-Я]+$/)){
        formIsValid = false;
        formErrors['firstName'] = 'только буквы';
      }
    }

    if(!fields['lastName']){
      formIsValid = false;
      formErrors['lastName'] = 'должно быть заполнено';
    }

    if(typeof fields['lastName'] !== 'undefined'){
      if(!fields['lastName'].match(/^[a-zA-Zа-яА-Я]+$/)){
        formIsValid = false;
        formErrors['lastName'] = 'только буквы';
      }
    }

    if(!fields['email']){
      formIsValid = false;
      formErrors['email'] = 'должно быть заполнено';
    }

    if(typeof fields['email'] !== 'undefined'){
      if(!this.emailRegex.test(fields.email)){
        formIsValid = false;
        formErrors['email'] = 'email не валиден';
      }
    }

    if(!fields['phone']){
      formIsValid = false;
      formErrors['phone'] = 'должно быть заполнено';
    }

    if(typeof fields['phone'] !== 'undefined'){
      formIsValid = false;
      formErrors['phone'] = this.phoneRegex.test(fields.phone) ? '' : 'телефон не валиден';
    }

    if (activeTab === 'Доставка по адресу') {
      if(!fields['street']){
        formIsValid = false;
        formErrors['street'] = 'должно быть заполнено';
      }

      if(!fields['apartment']){
        formIsValid = false;
        formErrors['apartment'] = 'должно быть заполнено';
      }

      if(!fields['house']){
        formIsValid = false;
        formErrors['house'] = 'должно быть заполнено';
      }
    }

    this.setState({
      formErrors: formErrors,
    });
    return formIsValid;
  };

  submitForm = (e) => {
    const { fields } = this.state;
    e.preventDefault();
    if(this.handleValidation()){
      console.log(`
        --SUBMITTING--
        First Name: ${fields.firstName}
        Last Name: ${fields.lastName}
        Email: ${fields.email}
        phone: ${fields.phone}
        street: ${fields.street}
        apartment: ${fields.apartment}
        house: ${fields.house}
      `);
    }
  };

  handleChange = (field, e) => {
    this.setState({
      fields: {...this.state, [field]: e.target.value},
    });
  };

  onClickTabItem = (activeTab) => {
    this.setState({
      activeTab: activeTab,
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

    const { cart, fetching, totalQuantity, totalPrice } = this.props;
    const { formErrors, fields } = this.state;

    return (
      <Layout>
        <div className="cart">

          <div className="cart-main">
            {
              fetching && <Loader />
            }
            {
              !fetching && (!cart || R.isEmpty(cart)) && (
                <div className="cart-no-product">В вашей корзине пока нет товаров</div>
              )
            }
            {
              !fetching && cart.length > 0 && (
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
                              <div label="Самовывоз">
                                <PersonalData errors={formErrors} values={fields} onChange={this.handleChange}/>
                              </div>
                              <div label="Доставка по адресу">
                                <PersonalData errors={formErrors} values={fields} onChange={this.handleChange}/>
                                <DeliveryData errors={formErrors} values={fields} onChange={this.handleChange}/>
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
  user: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  fetchCart: PropTypes.func.isRequired,
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
};

const mapStateToProps = (state, ownProps) => ({
  cart: state.cart.data,
  user: state.user.data,
  fetching: state.cart.fetching,
  errors: state.cart.errors,
  totalQuantity: getTotalCartProductQty(state),
  totalPrice: getTotalCartProductPrice(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);