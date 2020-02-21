import React from 'react';
import PropTypes from "prop-types";
import CartProductItem from './CartProductItem';
import { Link } from 'react-router-dom';
import Button from '../../common/components/Button';


const CartContent = ({ items, removeProductFromCart, increaseCartItem, decreaseCartItem, total }) => {

  console.log("total", total);

  return (
    <div className="cart__content">
      {
        items.map(addedItem => {
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
            type="primary" />
        </Link>
      </div>
    </div>
  )
};

CartContent.propTypes = {
  items: PropTypes.array.isRequired
};

export default CartContent