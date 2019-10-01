import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCart, removeProductFromCart, increaseCartItem, decreaseCartItem } from '../actions/cartActions';
import ContentLoader from 'react-content-loader'
import PropTypes from 'prop-types';
import CartTable from "../components/CartTable";
import { Link } from 'react-router-dom';
import Button from '../../common/components/button/Button.jsx';

const MyLoader = props => (
  <ContentLoader
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)

class Cart extends Component {

  componentDidMount() {
    this.props.loadCart()
  }

  render() {

    let create = () => {

    }

    console.log('RENDER <Cart>');

    const { cartItems, errors, fetching, removeProductFromCart, increaseCartItem, decreaseCartItem } = this.props;

    console.log(cartItems);

    return (
      <div className="cart">
        <h2 className="cart__title">ОФОРМЛЕНИЕ ЗАКАЗА</h2>

        {
          fetching && <MyLoader />
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
          : <CartTable
              cartItems={this.props.cartItems}
              removeProductFromCart={removeProductFromCart}
              increaseCartItem={increaseCartItem}
              decreaseCartItem={decreaseCartItem}
            /> 
        }

        <div className="cart__content__order">
          <Link to={{ pathname: '/checkout', state: {cartItems: cartItems}}}>
            <Button
              title="Расчитать"
              type="primary"
              action={create} />
          </Link>
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

export default connect(mapStateToProps, { loadCart, removeProductFromCart, increaseCartItem, decreaseCartItem })(Cart)