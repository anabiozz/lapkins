import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../../common/components/Counter';
import config from '../../../config';

const CartProductItem = ({ product, removeProduct, increaseProductQuantity, decreaseProductQuantity }) => {

	return <div className="cart-product-item">

		<div className="cart-product-item-image">
			<img src={`${config.imagePath.dev_path_preview}1/product_img/1_thumb.jpg`} alt="" />
		</div>

		<div className="cart-product-item-content">
			<div className="left-content">
				<span className="description">{product.name}</span>
				<span>Размер: {product.size}</span>
				<div onClick={() => removeProduct(product)} className="remove">Удалить</div>
			</div>

			<div className="right-content">

				<Counter
					value={product.quantity}
					minusFunc={() => decreaseProductQuantity(product)}
					plusFunc={() => increaseProductQuantity(product)}
				/>

				<div className="price">
					Цена: {product.price * product.quantity} руб.
				</div>

			</div>
		</div>
	</div>;
};

CartProductItem.propTypes = {
	product: PropTypes.object.isRequired,
	removeProduct: PropTypes.func.isRequired,
	increaseProductQuantity: PropTypes.func.isRequired,
	decreaseProductQuantity: PropTypes.func.isRequired,
};

export default CartProductItem;