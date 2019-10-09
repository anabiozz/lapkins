import React from 'react';
import PropTypes from "prop-types";
import CartProductItem from './CartProductItem';
import { Link } from 'react-router-dom';
import Button from '../../common/components/button';


const CartContent = ({ addedItems, removeProductFromCart, increaseCartItem, decreaseCartItem, checkout, total }) => {

  if (!addedItems.length) {
    return <div> Корзина пуста </div>
  }

  console.log("total", total);

  return (
    <div className="cart__content">
      {
        addedItems.map(addedItem => {
          return <CartProductItem
            key={addedItem.id}
            addedItem={addedItem}
            removeProductFromCart={removeProductFromCart}
            increaseCartItem={increaseCartItem}
            decreaseCartItem={decreaseCartItem} />
        })
      }
      <div className="cart__content__order">
        <Link to='/checkout'>
          <Button
            title="Продолжить оформление"
            type="primary"
            action={checkout} />
        </Link>
      </div>
    </div>
  )
}

CartContent.propTypes = {
  addedItems: PropTypes.array.isRequired
}

export default CartContent