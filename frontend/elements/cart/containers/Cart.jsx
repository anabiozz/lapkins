import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';
import CartContent from "../components/CartContent";
import Breadcrumbs from '../../common/components/Breadcrumbs';
import Loader from '../../common/components/Loader';

class Cart extends Component {

  static fetching ({ dispatch }) {
    return [dispatch(actions.loadCart())];
  }

  componentDidMount() {
    this.props.loadCart();
  }

  render() {

    console.log('RENDER <Cart>');

    const {
      items,
      errors,
      fetching,
      removeProductFromCart,
      increaseCartItem,
      decreaseCartItem,
      total,
      cookies,
      cartSession
    } = this.props;

    return (
      <div className="cart">

        <section className="breadcrumbs_wrapper">
          <Breadcrumbs />
        </section>

        <div className="cart__main">
          <h2 className="cart__title">ОФОРМЛЕНИЕ ЗАКАЗА</h2>
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
              <CartContent
                items={items}
                removeProductFromCart={removeProductFromCart}
                increaseCartItem={increaseCartItem}
                decreaseCartItem={decreaseCartItem}
                total={total}
              />
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
  removeProductFromCart: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  increaseCartItemQuantity: PropTypes.func.isRequired,
  decreaseCartItem: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  items: state.cart.items,
  errors: state.cart.errors,
  fetching: state.cart.fetching,
  total: state.cart.total,
  cartSession: state.cart.cartSession,
});

export default connect(mapStateToProps, { ...actions })(Cart);