import React from 'react';
import PropTypes from "prop-types";
import CartProductItem from './CartProductItem';
import { Link } from 'react-router-dom';
import Button from '../../common/components/button';


const CartContent = ({ cartItems, removeProductFromCart, increaseCartItem, decreaseCartItem, checkout }) => {

  if (!cartItems.length) {
    return <div> Корзина пуста </div>
  }

  return (
    <div className="cart__content">
      {
        cartItems.map(cartItem => {
          return <CartProductItem 
            key={cartItem.product.id} 
            cartItem={cartItem}
            removeProductFromCart={removeProductFromCart}
            increaseCartItem={increaseCartItem}
            decreaseCartItem={decreaseCartItem} />
        })
      }
      <div className="cart__content__order">
        <Link to={{ pathname: '/checkout', state: {cartItems: cartItems}}}>
          <Button
            title="Продолжить офрмление"
            type="primary"
            action={checkout} />
        </Link>
      </div>
    </div>
  )
}

CartContent.propTypes = {
  cartItems: PropTypes.array.isRequired
}

export default CartContent