import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {useHistory, useParams, useLocation} from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import Loader from '../../common/components/Loader';
import {addProduct} from '../../cart/fetch';
import {getSummary} from '../../cart/fetch';
import { store } from '../../../store';
import Button from '../../common/components/Button';
import {fetchProduct, fetchProductByAttribute} from '../../../api';

const Description = props => {

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(null);
    const [attributes, setAttributes] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const {sku} = useParams();
    // const globalState = useContext(store);
    // const { state, dispatch } = globalState;

  const fetch = async () => {
    setLoading(true);
    let product = await fetchProduct(sku);
    setProduct(product);
    setAttributes([...product.variation.attributes]);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, [sku]);

  const handleSelect = async (product_id, newAttr) => {
    setLoading(true);
    attributes[attributes.findIndex(el => el.name === newAttr.name)] = newAttr;
    let newProduct = await fetchProductByAttribute(product_id, attributes);
    setProduct(newProduct);
    let arr = location.pathname.split('/');
    arr[arr.length-1] = newProduct.variation.sku;
    history.push(arr.join('/'));
    setLoading(false);
  };

  const addToCart = (sku) => {
    addProduct(sku)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not added product to cart');
        }
        return response.json();
      })
      .then(() => {
        getSummary()
          .then((response) => {
            if (!response.ok) {
              throw new Error('Could not fetch cart info');
            }
            return response.json();
          })
          .then(data => {
            // dispatch({type: 'SET_CART_INFO', value: data});
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  };

  console.log('RENDER <Description>');

  return (
    <Fragment>
      <section className="breadcrumbs-wrapper">
        <Breadcrumbs />
      </section>

      <div className="product-description">

        <div className="product-description-content">
          {
            loading && <Loader />
          }
          {
            !loading && !product && (
              <span>Данный товар отсутствует</span>
            )
          }
          {
            !loading && product && (
              <Fragment>

                <div className="product-description-image">
                  <Carousel axis="horizontal">
                    {
                      product.variation.images.map((image, index) => {
                        return <div key={index}>
                          <img alt="img" src={image.src} />
                          <p className="legend">Legend {index}</p>
                        </div>;
                      })
                    }
                  </Carousel>
                </div>

                <div className="product-description-block">
                  <div className="information">

                    <div className="name">{product.name}</div>

                    <div className="price">
                      { product.variation.price + ' руб.' }
                    </div>

                    <div className="description">
                        { product.info.description }
                    </div>

                    <div className="variations">
                        {
                            product.info.attributes && product.info.attributes.map((attribute, i) => (
                                <form key={i}>
                                    <div>{attribute.name}</div>
                                    <div className="radio-group">
                                        {
                                          attribute.value && attribute.value.map((attr, j) => (
                                                <Fragment key={j}>
                                                    <input
                                                        value={attr}
                                                        type="radio"
                                                        id={`option-${i}-${j}`}
                                                        onChange={() => handleSelect(product.info.id, {name: attribute.name, value: attr})}
                                                        name={attribute.name}
                                                        checked={product.variation.attributes[i].value === attr}
                                                    />
                                                    <label htmlFor={`option-${i}-${j}`}>{attr}</label>
                                                </Fragment>
                                            ))
                                        }
                                    </div>
                                </form>
                            ))
                        }
                    </div>

                    <div className="add_to_cart">
                      <Button title="Добавить в корзину" type="primary" action={() => addToCart(product.variations[0].sku)} />
                    </div>

                  </div>
                </div>
              </Fragment>
            )
          }
        </div>
      </div>
    </Fragment>
    );
};

Description.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Description;
