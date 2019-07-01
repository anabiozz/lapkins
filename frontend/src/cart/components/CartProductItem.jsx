import React from 'react';
import Locale from '../../utils/locale';
import PropTypes from "prop-types";
import config from '../../config';
const locale = new Locale('RU').get()

const CartProductItem = ({ product }) => {

	console.log(product);

	return <div className="cart__item">
		<div className="cart__item__image">
			<img src={`${config.imagePath.preview}${product.name}_thumb${product.ext}`} alt="" />
		</div>

		<div className="cart__item__information">
			<div className="cart__item__description">{product.decription}</div>

			<table className="cart__item__categories">
				<tbody>
					{
						product.categories && Object.keys(product.categories).map(key => (
							<tr key={key}>
								<td className="pi_table_td">{locale.get(key)}</td>
								<td className="pi_table_td">{product.categories[key]}</td>
							</tr>
						))
					}
				</tbody>
			</table>

			<div className="cart__item__price">
				{product.price}
				{' руб.'}
			</div>
		</div>

		<a href="#" class="close-button">
			<div class="in">
				<div class="close-button-block"></div>
				<div class="close-button-block"></div>
			</div>
			<div class="out">
				<div class="close-button-block"></div>
				<div class="close-button-block"></div>
			</div>
		</a>
	</div>
}

CartProductItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default CartProductItem