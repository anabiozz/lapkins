import React, { Fragment, useEffect, useState } from 'react';
import Item from '../components/Item.js';
import config from '../../../config';
import Loader from '../../common/components/Loader';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

const Catalog = props => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //  fetching ({ dispatch, path }) {
  //   return [dispatch(actions.getProducts(path))];
  // }

  const fetchProducts = () => {
    setLoading(true);
    fetch(`${config.apiDomain}/api/v1/products/get-products?category=${props.match.params.subcategory}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not fetch person!');
        }
        return response.json();
      })
      .then(products => {
        setProducts(products);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
    return () => {
      console.log('Cleaning up...');
    };
  }, [props.match.params.subcategory]);


  console.log('RENDER <Catalog>');

  return (
    <Fragment>
      <section className="breadcrumbs-wrapper">
        <Breadcrumbs />
      </section>

      <div className="catalog">

        <div className="products">
          {
            loading && <Loader />
          }
          {
            !loading && error && (
              <div><strong>ERROR:</strong>{error.message}</div>
            )
          }
          {
            !loading && !error && products && products.length === 0 && (
              <span>Данная категория товара на данный момент отсутствует.</span>
            )
          }
          {
            !loading && !error && products.map((product, i) => (
              <Item key={i} imgUrl={`${config.imagePath.dev_path_preview}${i+1}/product_img/1_thumb.jpg`} product={product} url={props.match.url} />
            ))
          }
        </div>
      </div>
    </Fragment>
  );
};

Catalog.propTypes = {
  // subcategory: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
};

export default Catalog;