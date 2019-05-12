import React from 'react';
import Locale from '../../utils/locale';
import PropTypes from "prop-types";
import config from '../../config';
const locale = new Locale('RU').get()

const CartProductItem = ({ product }) => {

	return <div className="cart-product-item">
		<div className="image">
			<img src={`${config.imagePath.preview}${product.name}_thumb${product.ext}`} alt="" />
		</div>

		<div className="information">
			<div className="description">{product.decription}</div>

			<table className="categories">
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

			<div className="price">
				{product.price}
				{' руб.'}
			</div>
		</div>
	</div>
}

CartProductItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default CartProductItem