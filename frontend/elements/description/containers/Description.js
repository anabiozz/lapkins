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
    fetch(`${config.apiDomain}/api/v1/products/get-product?sku=${sku}`)
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

	const handleSelect = (e, sku) => {
    let splitURL = location.pathname.split('/');
    splitURL.pop();
    history.replace(splitURL.join('/') + '/' +  sku);
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
                      product.variations[0].photos.map((image, index) => {
                        return <div key={index}>
                          <img alt="img" src={`${config.imagePath.dev_path_full}/1/300x450/1.jpg`} />
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
                      { product.variations[0].pricing.retail + ' руб.' }
                    </div>

                    <table className="categories">
                      <tbody>
                      {
                        product.attributes && product.attributes.map((attr, i) => (
                          <tr key={i}>
                            <td className="pi_table_td">{attr.key}</td>
                            <td className="pi_table_td">{attr.value}</td>
                          </tr>
                        ))
                      }
                      </tbody>
                    </table>

                    <div className="size">
                      {/*TODO: возможно добавить на кнопки колчество добавленных товаров*/}
                      <form>
                        <div className="radio-group">
                          {
                            product.sizes && product.sizes.map((size, index) => (
                              <Fragment key={index}>
                                <input
                                  value={size.key}
                                  type="radio"
                                  id={`option-${index}`}
                                  onChange={(e) => handleSelect(e, size.key)}
                                  name="value"
                                  checked={product.variations[0].dimensions.width + 'x' + product.variations[0].dimensions.height === size.value}
                                />
                                <label htmlFor={`option-${index}`}>{size.value}</label>
                              </Fragment>
                            ))
                          }
                        </div>
                      </form>
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
