import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';
import CartContent from "../components/CartContent";
import Breadcrumbs from '../../common/components/breadcrumbs';
import Loader from '../../common/components/Loader';
import { withCookies } from 'react-cookie';

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
      addedItems,
      errors,
      fetching,
      removeProductFromCart,
      increaseCartItem,
      decreaseCartItem,
      total,
      cookies
    } = this.props;

    console.log("addedItems", cookies.get('addedItems'));

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
            addedItems && !addedItems.length
            ? <div className="cart__no__product">В вашей корзине пока нет товаров</div>
            : <CartContent
                addedItems={this.props.addedItems}
                removeProductFromCart={removeProductFromCart}
                increaseCartItem={increaseCartItem}
                decreaseCartItem={decreaseCartItem}
                total={total}
              /> 
          }
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
  loadCart: PropTypes.func.isRequired,
  addedItems: PropTypes.array.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  increaseCartItem: PropTypes.func.isRequired,
  decreaseCartItem: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  addedItems: state.cart.addedItems,
  errors: state.cart.errors,
  fetching: state.cart.fetching,
  total: state.cart.total,
  cookies: ownProps.cookies,
})

export default withCookies(connect(mapStateToProps, { ...actions })(Cart));