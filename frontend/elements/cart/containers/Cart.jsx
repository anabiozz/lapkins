import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import Loader from '../../common/components/Loader';
import { withCookies } from 'react-cookie';
import {Link} from "react-router-dom";
import Button from "../../common/components/Button";
import CartProductItem from "../components/CartProductItem";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.remove = this.remove.bind(this);
  }

  static fetching ({ dispatch }) {
    // return [dispatch(actions.loadCart())];
  }

  componentDidMount() {
    this.props.loadCartReset();
    const session = this.props.cookies.get('cartSession');
    this.props.loadCart(session);
  }

  remove(product) {
    const session = this.props.cookies.get('cartSession');
    if (session) {
      this.props.removeProduct(product, product.variation_id, session, product.size_option_id);
    } else {
      console.error("Сессия не создана")
    }
  }

  increase(product) {
    const session = this.props.cookies.get('cartSession');
    if (session) {
      this.props.increaseProductQuantity(product.variation_id, session, product.size_option_id);
    } else {
      console.error("Сессия не создана")
    }
  }

  decrease(product) {
    const session = this.props.cookies.get('cartSession');
    if (session) {
      if (product.quantity >= 2) {
        this.props.decreaseProductQuantity(product.variation_id, session, product.size_option_id);
      }
    } else {
      console.error("Сессия не создана")
    }
  }

  render() {
    console.log('RENDER <Cart>');

    const { items, errors, fetching, removeProduct } = this.props;

    return (
      <div className="cart">

        <section className="breadcrumbs_wrapper">
          <Breadcrumbs />
        </section>

        <div className="cart__main">
          <h3 className="cart__title">ОФОРМЛЕНИЕ ЗАКАЗА</h3>
          {
            fetching && <Loader />
          }
          {
            errors && (
            <div style={{ marginTop: '200px' }}>
              <strong>ERROR: </strong>
              {errors.message}
            </div>
            )
          }
          {
            !errors && items && items.length === 0 && (
              <div className="cart__no__product">В вашей корзине пока нет товаров</div>
            )
          }
          {
            !errors && items && items.length > 0 && (
              <Fragment>
                {
                  items && items.length > 0 && items.map((product, i) => {
                    return <CartProductItem
                      key={i}
                      product={product}
                      removeProduct={this.remove}
                      increaseProductQuantity={this.increase}
                      decreaseProductQuantity={this.decrease} />
                  })
                }
                <div className="cart__content__order">
                  <Link to='/checkout'>
                    <Button
                      title="Продолжить оформление"
                      type="primary" />
                  </Link>
                </div>
              </Fragment>
            )
          }
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
  loadCart: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  removeProduct: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  loadCartReset: PropTypes.func.isRequired,
  increaseProductQuantity: PropTypes.func.isRequired,
  decreaseProductQuantity: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  items: state.cart.items,
  errors: state.cart.errors,
  fetching: state.cart.fetching,
  cookies: ownProps.cookies,
});

export default withCookies(connect(mapStateToProps, { ...actions })(Cart));