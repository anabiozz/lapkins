import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  productProp,
} from '../../utils/props'

const Product = (props) => {
  const { product, url } = props

  return (
    <div className="product">
      <div className="image">
        <div className="inner">
          <Link to={`/postcards/${product.id}`}>
            <img src={url} alt="" />
          </Link>
        </div>
      </div>
      <div className="prev_desc">
        <div>{product.decription}</div>
        <div>{product.categories.authors}</div>
        <div>
          {product.price}
          {' руб.'}
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape(productProp).isRequired,
  url: PropTypes.string.isRequired,
}

export default Product
