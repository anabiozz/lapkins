import React from 'react';
import PropTypes from "prop-types";
import CartProductItem from '../components/CartProductItem';

const CartTable = ({ products }) => {

  if (!products.length) {
    return <div> Корзина пуста </div>
  }

  console.log(products);

  return (
    <div className="cart__table">
        {
          products.map(product => {
            return <CartProductItem key={product.id} product={product} />
          })
        }

        {/* <div className="to-order">
                  <button type="button">Оформить заказ</button>
              </div> */}
    </div>
  )
}

CartTable.propTypes = {
  products: PropTypes.array.isRequired
}

export default CartTable