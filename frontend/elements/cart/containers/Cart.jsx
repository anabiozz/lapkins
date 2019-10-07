import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/cartActions';
import PropTypes from 'prop-types';
import CartContent from "../components/CartContent";
import Breadcrumbs from '../../common/components/breadcrumbs';
import Loader from '../../common/components/Loader';

class Cart extends Component {

  componentDidMount() {
    this.props.loadCart()
  }

  checkout = () => {

  }

  render() {

    console.log('RENDER <Cart>');

    const {
      cartItems,
      errors,
      fetching,
      removeProductFromCart,
      increaseCartItem,
      decreaseCartItem
    } = this.props;

    console.log(cartItems);

    return (
      <div className="cart">
        <section className="search_content">
          <div className="search_wrapper">
            <Breadcrumbs />
          </div>
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
            cartItems && !cartItems.length
            ? <div className="cart__no__product">В вашей корзине пока нет товаров</div>
            : <CartContent
                cartItems={this.props.cartItems}
                removeProductFromCart={removeProductFromCart}
                increaseCartItem={increaseCartItem}
                decreaseCartItem={decreaseCartItem}
                checkout={this.checkout}
              /> 
          }
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
  loadCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
  removeProductFromCart: PropTypes.func,
  addProductToCart: PropTypes.func,
  increaseCartItem: PropTypes.func,
  decreaseCartItem: PropTypes.func,
  errors: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  errors: state.cart.errors,
  fetching: state.cart.fetching,
})

export default connect(mapStateToProps, { ...action })(Cart)