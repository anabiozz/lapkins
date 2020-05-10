import React, { Fragment, useEffect, useState } from 'react';
import Item from '../components/Item.js';
import config from '../../../config';
import Loader from '../../common/components/Loader';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import fetch from 'isomorphic-fetch';
import {useParams, useLocation} from 'react-router-dom';

const Catalog = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const {category, subcategory} = useParams();
  const location = useLocation();

  const fetchProducts = () => {
    fetch(`${config.apiDomain}/api/v1/products/catalog?dep=${category}&category=${subcategory}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not fetch catalog');
        }
        return response.json();
      })
      .then(products => {
        setProducts(products);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
    setLoading(false);
  }, [subcategory]);


  console.log('RENDER <Catalog>');

  return (
    <Fragment>
      <section className="breadcrumbs-wrapper">
        <Breadcrumbs />
      </section>

      <div className="catalog">
          {
            loading && <Loader />
          }
          {
            !loading && (!products || products.length === 0) && (
              <span>Данные товары на данный момент отсутствуют</span>
            )
          }
          {
            <div className="products">
              {
                !loading && products && products.map((product, i) => (
                  <Item key={i} imgUrl={product.thumbnail} product={product} url={location.pathname} />
                ))
              }
            </div>
          }
        </div>

    </Fragment>
  );
};

export default Catalog;