import React from 'react';
import PropTypes from "prop-types";
import CartProductItem from './CartProductItem';
import Button from '../../common/components/button/Button';
import { Link } from 'react-router-dom';

const CartTable = ({ cartItems, removeProductFromCart, increaseCartItem, decreaseCartItem }) => {

  if (!cartItems.length) {
    return <div> Корзина пуста </div>
  }

  let create = () => {

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
          <Link to='/checkout'>
            <Button
              title="Расчитать"
              type="primary"
              action={create} />
          </Link>
        </div>
    </div>
  )
}

CartTable.propTypes = {
  cartItems: PropTypes.array.isRequired
}

export default CartTable