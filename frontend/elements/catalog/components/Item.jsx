import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  productProp,
} from '../../../utils/props';

const Item = ({ product, imgUrl, url }) => {
  return (
    <div className="product">
      <div className="product__image">
        <div className="product__image__inner">
          <Link to={ url + `/${product.variation_id}` }>
            <img src={imgUrl} alt="img" />
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
  )
};

Item.propTypes = {
  product: PropTypes.shape(productProp).isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Item
