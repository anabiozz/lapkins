import React from 'react';
import Locale from '../../utils/locale';
import PropTypes from "prop-types";
import config from '../../config';
import Quantity from '../../common/components/quantity';
const locale = new Locale('RU').get()

const CartProductItem = ({ cartItem, removeProductFromCart, increaseCartItem, decreaseCartItem }) => {

	return <div className="cart__content__item">
		<div className="cart__content__item__image">
			<img src={`${config.imagePath.dev_path_preview}${cartItem.product.product_id}_thumb.jpg`} alt="" />
		</div>

		<div className="cart__content__item__content">
			<div className="information">
				<div className="description">{cartItem.product.decription}</div>

				<table className="categories">
					<tbody>
						{
							Object.keys(cartItem.product.attributes) && Object.keys(cartItem.product.attributes).map((category, i) => (
								<tr key={i}>
									<td className="pi_table_td">{locale.get(category)}</td>
									<td className="pi_table_td">
										{
											Array.isArray(cartItem.product.attributes[category]) 
											? cartItem.product.attributes[category].join(", ") 
											: cartItem.product.attributes[category]
										}
									</td>
								</tr>
							))
						}
					</tbody>
				</table>

				<div className="price">
					{cartItem.product.price_override  * cartItem.count}
					{' руб.'}
				</div>
			</div>

			<Quantity 
				cartItem={cartItem}
				increaseCartItem={increaseCartItem}
				decreaseCartItem={decreaseCartItem}
			/>

		</div>

		<span onClick={() => removeProductFromCart(cartItem.product)} className="close hairline"></span>
	</div>
}

CartProductItem.propTypes = {
	cartItem: PropTypes.object.isRequired,
	removeProductFromCart: PropTypes.func.isRequired,
}

export default CartProductItem