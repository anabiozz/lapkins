import React from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import {
  productProp,
} from '../../utils/props';
import config from '../../config';

const Product = ({ product, url, productType }) => {
  return (
    <div className="product">
      <div className="product__image">
        <div className="product__image__inner">
          <Link to={{ pathname: `${productType}/${product.id}` }}>
            <img src={url} alt="" />
          </Link>
        </div>
      </div>
      <div className="product__info">
        <div className="product__info__desc">{product.decription}</div>
        <div className="product__info__price">
          <span>от {product.price} руб.</span>
          <img className="to__favorites" src={`data:image/svg+xml;base64,${config.heart}`} />
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
