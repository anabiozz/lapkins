import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  productProp,
} from '../../../_helpers/props';

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product__image">
        <div className="product__image__inner">
          <Link to={ `/product/${product.id}` }>
            <img src={product.thumbnail} alt="img" />
          </Link>
        </div>
      </div>
      <div className="product__info">
        <div className="product__info__desc">{product.name}</div>
        <div className="product__info__price">
          <span>от {product.price} руб.</span>
          </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape(productProp).isRequired,
};

export default Product;
