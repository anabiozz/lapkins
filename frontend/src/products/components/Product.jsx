import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  productProp,
} from '../../utils/props'

class Product extends Component {

  componentDidMount() {
    console.log( this.props.match);
  }

  render () {

    const { product, url } = this.props

    return (
      <div className="product">
        <div className="image">
          <div className="inner">
            <Link to={`/products/wallart/${product.id}`}>
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
}

Product.propTypes = {
  product: PropTypes.shape(productProp).isRequired,
  url: PropTypes.string.isRequired,
}

export default Product
