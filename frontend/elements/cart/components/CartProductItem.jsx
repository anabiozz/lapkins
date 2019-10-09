import React from 'react';
import Locale from '../../../utils/locale';
import PropTypes from "prop-types";
import config from '../../../config';
import Counter from '../../common/components/counter';

const CartProductItem = ({ addedItem, removeProductFromCart, increaseCartItem, decreaseCartItem }) => {

	return <div className="cart__product__item">
		<div className="cart__content__item__image">
			<img src={`${config.imagePath.dev_path_preview}${addedItem.images[0]}_thumb.jpg`} alt="" />
		</div>

		<div className="product__item__content">
			<div className="left__content">
				<div className="content">
					<span className="decription">{addedItem.decription}</span>
					<span>Постер</span>
					<span>Размер: {addedItem.size}</span>
					<span>Цена за штуку: {addedItem.price_override}</span>
				</div>
				<span onClick={() => removeProductFromCart(addedItem)} className="close">Удалить</span>
			</div>

			<div className="right__content">
				<Counter 
					addedItem={addedItem}
					increaseCartItem={increaseCartItem}
					decreaseCartItem={decreaseCartItem}
				/>

				<div className="price">
					Цена: {addedItem.price_override  * addedItem.quantity} руб.
				</div>
			</div>
		</div>
	</div>
}

CartProductItem.propTypes = {
	addedItem: PropTypes.object.isRequired,
	removeProductFromCart: PropTypes.func.isRequired,
	increaseCartItem: PropTypes.func.isRequired,
	decreaseCartItem: PropTypes.func.isRequired,
}

export default CartProductItem