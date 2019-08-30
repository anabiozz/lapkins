import React from 'react';
import Locale from '../../utils/locale';
import PropTypes from "prop-types";
import config from '../../config';
import Quantity from '../../common/components/quantity/Quantity';
const locale = new Locale('RU').get()

const CartProductItem = ({ cartItem, removeProductFromCart, increaseCartItem, decreaseCartItem }) => {

	return <div className="cart__content__item">
		<div className="cart__content__item__image">
			<img src={`${config.imagePath.preview}${cartItem.product.name}_thumb${cartItem.product.ext}`} alt="" />
		</div>

		<div className="cart__content__item_content">
			<div className="cart__content__item__information">
				<div className="cart__content__item__description">{cartItem.product.decription}</div>

				<table className="cart__content__item__categories">
					<tbody>
						{
							cartItem.product.categories && cartItem.product.categories.map((obj, i) => (
								<tr key={i}>
								<td className="pi_table_td">{Object.keys(obj)[0]}</td>
									<td className="pi_table_td">{obj[Object.keys(obj)[0]].join(", ")}</td>
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