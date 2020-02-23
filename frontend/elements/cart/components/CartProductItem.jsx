import React from 'react';
import PropTypes from "prop-types";
import Counter from '../../common/components/Counter';

const CartProductItem = ({ product, removeProduct, increaseProductQuantity, decreaseProductQuantity }) => {

	return <div className="cart__product__item">

		<div className="cart__content__item__image">
			{/*<img src={`${config.imagePath.dev_path_preview}${addedItem.images[0]}_thumb.jpg`} alt="" />*/}
		</div>

		<div className="product__item__content">
			<div className="left__content">
				<div className="content">
					<span className="decription">{product.name}</span>
					<span>Размер: {product.size}</span>
				</div>
			</div>

			<div className="right__content">

				<Counter
					value={product.quantity}
					minusFunc={() => decreaseProductQuantity(product)}
					plusFunc={() => increaseProductQuantity(product)}
				/>

				<div className="price">
					Цена: {product.price} руб.
				</div>

				<div onClick={() => removeProduct(product)} className="remove">Удалить</div>

			</div>
		</div>
	</div>
};

CartProductItem.propTypes = {
	product: PropTypes.object.isRequired,
	removeProduct: PropTypes.func.isRequired,
	increaseProductQuantity: PropTypes.func.isRequired,
	decreaseProductQuantity: PropTypes.func.isRequired,
};

export default CartProductItem