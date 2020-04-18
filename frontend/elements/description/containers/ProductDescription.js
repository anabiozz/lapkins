import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import config from '../../../config';
import Button from '../../common/components/Button';
import { Carousel } from 'react-responsive-carousel';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import Loader from '../../common/components/Loader';
import fetch from 'isomorphic-fetch';
import {addProduct} from '../../cart/fetch';
import {loadCartInfo} from '../../header/fetch';

const ProductDescription = props => {

  const [select, setSelect] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [variation, setVariation] = useState({});

  const fetchDesc = () => {
    fetch(`${config.apiDomain}/api/v1/products/get-variation?sku=${props.match.params.sku}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not fetch person!');
        }
        return response.json();
      })
      .then(variation => {
        setVariation(variation);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  // static fetching ({ dispatch, path }) {
  //   let sku = path.split('/');
  //   return [dispatch(actions.getVariation(sku[2]))];
  // }

  useEffect(() => {
    fetchDesc();
  }, [props.match.params.sku]);

	const handleSelect = (e, sku) => {
    const value = e.currentTarget.value;
		const name = e.currentTarget.name;

		if (value !== select.value) {
      setSelect({[name]: value})
      let splitURL = props.match.url.split('/');
      splitURL.pop();
      props.history.replace(splitURL.join('/') + '/' +  sku);
    }
  };

  const addToCart = (sku) => {
    addProduct(sku);
    loadCartInfo();
  };

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
            error && (
              <div style={{ marginTop: '200px' }}>
                <strong>ERROR: </strong>
                {error.message}
              </div>
            )
          }
          {
            Object.keys(variation).length > 0 && (
              <Fragment>

                <div className="product-description-image">
                  <Carousel axis="horizontal">
                    {
                      variation.variation.photos.map((image, index) => {
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

                    <div className="name">{variation.name}</div>

                    <div className="price">
                      { variation.variation.pricing.retail + ' руб.' }
                    </div>

                    <table className="categories">
                      <tbody>
                      {
                        variation.attributes && variation.attributes.map((attr, i) => (
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
                            variation.sizes && variation.sizes.map((size, index) => (
                              <Fragment key={index}>
                                <input
                                  value={size.key}
                                  type="radio"
                                  id={`option-${index}`}
                                  onChange={(e) => handleSelect(e, size.key)}
                                  name="value"
                                  checked={variation.variation.dimensions.width + 'x' + variation.variation.dimensions.height === size.value}
                                />
                                <label htmlFor={`option-${index}`}>{size.value}</label>
                              </Fragment>
                            ))
                          }
                        </div>
                      </form>
                    </div>

                    <div className="add_to_cart">
                      <Button title="Добавить в корзину" type="primary" action={() => addToCart(variation.variation.sku)} />
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
  history: PropTypes.object.isRequired,
  cookies: PropTypes.object.isRequired,
};

export default ProductDescription;
