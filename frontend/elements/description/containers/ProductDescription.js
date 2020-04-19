import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import config from '../../../config';
import Button from '../../common/components/Button';
import { Carousel } from 'react-responsive-carousel';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import Loader from '../../common/components/Loader';
import fetch from 'isomorphic-fetch';
import {addProduct} from '../../cart/fetch';
import {loadCartInfo} from '../../header/fetch';
import {useHistory, useParams, useLocation} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { store } from '../../../store';

const ProductDescription = props => {

  const [cookie, setCookie, removeCookie] = useCookies([config.cookies.token, config.cookies.tmpUserID]);
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const {sku} = useParams();
  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  const fetchDesc = () => {
    fetch(`${config.apiDomain}/api/v1/products/get-variation?sku=${sku}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not fetch product description.');
        }
        return response.json();
      })
      .then(desc => {
        setDesc(desc);
      })
      .catch(error => {
        console.error(error);
      });

    setLoading(false);
  };

  // static fetching ({ dispatch, path }) {
  //   let sku = path.split('/');
  //   return [dispatch(actions.getVariation(sku[2]))];
  // }

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
          throw new Error('Could not added product to cart.');
        }
        return response.json();
      })
      .then(() => {
        loadCartInfo()
          .then((response) => {
            if (!response.ok) {
              throw new Error('Could not fetch cart info!');
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
            !loading && !desc && (
              <span>Данный товар отсутствует.</span>
            )
          }
          {
            !loading && desc && (
              <Fragment>

                <div className="product-description-image">
                  <Carousel axis="horizontal">
                    {
                      desc.variation.photos.map((image, index) => {
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

                    <div className="name">{desc.name}</div>

                    <div className="price">
                      { desc.variation.pricing.retail + ' руб.' }
                    </div>

                    <table className="categories">
                      <tbody>
                      {
                        desc.attributes && desc.attributes.map((attr, i) => (
                          <tr key={i}>
                            <td className="pi_table_td">{attr.key}</td>
                            <td className="pi_table_td">{attr.value}</td>
                          </tr>
                        ))
                      }
                      </tbody>
                    </table>

                    <div className="size">
                      <form>
                        <div className="radio-group">
                          {
                            desc.sizes && desc.sizes.map((size, index) => (
                              <Fragment key={index}>
                                <input
                                  value={size.key}
                                  type="radio"
                                  id={`option-${index}`}
                                  onChange={(e) => handleSelect(e, size.key)}
                                  name="value"
                                  checked={desc.variation.dimensions.width + 'x' + desc.variation.dimensions.height === size.value}
                                />
                                <label htmlFor={`option-${index}`}>{size.value}</label>
                              </Fragment>
                            ))
                          }
                        </div>
                      </form>
                    </div>

                    <div className="add_to_cart">
                      <Button title="Добавить в корзину" type="primary" action={() => addToCart(desc.variation.sku)} />
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

ProductDescription.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ProductDescription;
