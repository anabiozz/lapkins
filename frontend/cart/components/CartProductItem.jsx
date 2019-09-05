import React from 'react';
import Locale from '../../utils/locale';
import PropTypes from "prop-types";
import config from '../../config';
import Quantity from '../../common/components/quantity/Quantity';
const locale = new Locale('RU').get()

const CartProductItem = ({ cartItem, removeProductFromCart, increaseCartItem, decreaseCartItem }) => {

	return <div className="cart__content__item">
		<div className="cart__content__item__image">
			<img src={`${config.imagePath.dev_path_preview}${cartItem.product.name}_thumb${cartItem.product.ext}`} alt="" />
		</div>

		<div className="cart__content__item_content">
			<div className="cart__content__item__information">
				<div className="cart__content__item__description">{cartItem.product.decription}</div>

				<table className="cart__content__item__categories">
					<tbody>
						{
							Object.keys(cartItem.product.categories) && Object.keys(cartItem.product.categories).map((category, i) => (
								<tr key={i}>
									<td className="pi_table_td">{category}</td>
									<td className="pi_table_td">
										{
											Array.isArray(cartItem.product.categories[category]) 
											? cartItem.product.categories[category].join(", ") 
											: cartItem.product.categories[category]
										}
									</td>
								</tr>
							))
						}
					</tbody>
				</table>

				<div className="cart__content__item__price">
					{cartItem.product.price  * cartItem.count}
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