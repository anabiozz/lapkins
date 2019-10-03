import React from 'react';
import Locale from '../../utils/locale';
import PropTypes from "prop-types";
import config from '../../config';
import Counter from '../../common/components/counter';
const locale = new Locale('RU').get()

const CartProductItem = ({ cartItem, removeProductFromCart, increaseCartItem, decreaseCartItem }) => {

	return <div className="cart__product__item">
		<div className="cart__content__item__image">
			<img src={`${config.imagePath.dev_path_preview}${cartItem.product.images[0]}_thumb.jpg`} alt="" />
		</div>

		<div className="product__item__content">
			<div className="left__content">
				<div className="content">
					<span className="decription">{cartItem.product.decription}</span>
					<span>Постер</span>
					<span>Размер: {cartItem.product.size}</span>
					<span>Цена за штуку: {cartItem.product.price_override}</span>
				</div>
				<span onClick={() => removeProductFromCart(cartItem.product)} className="close">Удалить</span>
			</div>

			<div className="right__content">
				<Counter 
					cartItem={cartItem}
					increaseCartItem={increaseCartItem}
					decreaseCartItem={decreaseCartItem}
				/>

				<div className="price">
					Цена: {cartItem.product.price_override  * cartItem.count} руб.
				</div>
			</div>
		</div>
	</div>
}

CartProductItem.propTypes = {
	cartItem: PropTypes.object.isRequired,
	removeProductFromCart: PropTypes.func.isRequired,
}

export default CartProductItem