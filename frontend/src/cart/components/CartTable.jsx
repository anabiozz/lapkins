import React from 'react';
import PropTypes from "prop-types";
import CartProductItem from '../components/CartProductItem';

const CartTable = ({ cartItems, removeProductFromCart, increaseCartItem, decreaseCartItem }) => {

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
              decreaseCartItem={decreaseCartItem}
            />
          })
        }

        <div className="cart__content__order">
            <button type="button">Оформить заказ</button>
        </div>
    </div>
  )
}

CartTable.propTypes = {
  cartItems: PropTypes.array.isRequired
}

export default CartTable