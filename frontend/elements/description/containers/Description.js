import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import config from '../../../config';
import Button from '../../common/components/Button';
import { Carousel } from 'react-responsive-carousel';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import Loader from '../../common/components/Loader';
import fetch from 'isomorphic-fetch';
import {addProduct} from '../../cart/fetch';
import {getSummary} from '../../cart/fetch';
import {useHistory, useParams, useLocation} from 'react-router-dom';
import { store } from '../../../store';

const Description = props => {

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const {sku} = useParams();
  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  const fetchDesc = () => {
      setLoading(true);
    fetch(`${config.apiDomain}/api/v1/products/product?sku=${sku}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not fetch product description');
        }
        return response.json();
      })
      .then(product => {
        setProduct(product);
      })
      .catch(error => {
        console.error(error);
      });

    setLoading(false);
  };

  useEffect(() => {
    fetchDesc();
  }, [sku]);

	const handleSelect = (e, attr) => {
        console.log(attr);
        setLoading(true);
        fetch(`${config.apiDomain}/api/v1/products/product?sku=${sku}&attr=${attr}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Could not fetch product description');
                }
                return response.json();
            })
            .then(product => {
                setProduct(product);
            })
            .catch(error => {
                console.error(error);
            });

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
            dispatch({type: 'SET_CART_INFO', value: data});
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
                      product.variation.assets.imgs.map((image, index) => {
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
                      { product.variation.pricing.price + ' руб.' }
                    </div>

                    <div className="description">
                        { product.desc.filter(obj => {return obj.lang === 'en';})[0].value }
                    </div>

                    <div className="variations">
                        {
                            product.variation_types.map((type, i) => (
                                <form key={i}>
                                    <div>{type.display}</div>
                                    <div className="radio-group">
                                        {
                                            type.attrs && type.attrs.map((attr, j) => (
                                                <Fragment key={j}>
                                                    <input
                                                        value={attr}
                                                        type="radio"
                                                        id={`option-${i}-${j}`}
                                                        onChange={(e) => handleSelect(e, attr)}
                                                        name={type.name}
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
