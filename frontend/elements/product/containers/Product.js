import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import { Carousel } from 'react-responsive-carousel';
import Breadcrumbs from '../../common/Breadcrumbs';
import Loader from '../../common/Loader';
import Button from '../../common/Button';
import { fetchProduct } from '../../../actions';
import { connect } from 'react-redux';
import Layout from '../../layout/containers/Layout';

class Product extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.props.fetchProduct(this.props.match.params.sku);
  }

  async handleSelect (e, sku, newAttr) {
    const { product, history } = this.props;

    let currentAttrs = R.find(R.propEq('sku', sku), product.data.attrs);
    let newAttrs =  JSON.parse(JSON.stringify(currentAttrs));
    let attrToChange = R.find(R.propEq('name', newAttr.name), newAttrs.value);
    attrToChange.value = newAttr.value;

    product.data.attrs.forEach(attr => {
      if (R.equals(newAttrs.value, attr.value)) {
        newAttrs.sku = attr.sku;
      }
    });

    this.props.fetchProduct(newAttrs.sku);
    history.push('/product/' + newAttrs.sku);
  }

  addToCart = (sku) => {
    // addProduct(sku)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Could not added product to cart');
    //     }
    //     return response.json();
    //   })
    //   .then(() => {
    //     getSummary()
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error('Could not fetch cart info');
    //         }
    //         return response.json();
    //       })
    //       .then(data => {
    //         // dispatch({type: 'SET_CART_INFO', value: data});
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

  render() {

    console.log('RENDER <Product>');

    const { product } = this.props;

    return (
      <Layout>
        <div className="product-description">

          <div className="product-description-content">
            {
              product.fetching && <Loader />
            }
            {
              !product.fetching && R.isEmpty(product.data) && (
                <span>Данный товар отсутствует</span>
              )
            }
            {
              !product.fetching && !R.isEmpty(product.data) && (
                <Fragment>
                  <div className="product-description-image">
                    <Carousel axis="horizontal">
                      {
                        product.data.variation.images.map((image, index) => {
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

                      <div className="name">{product.data.name}</div>

                      <div className="price">
                        { product.data.variation.price + ' руб.' }
                      </div>

                      <div className="description">
                        { product.data.info.description }
                      </div>

                      <div className="variations">
                        {
                          product.data.info.attributes && product.data.info.attributes.map((attribute, i) => (
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
                                        onChange={(e) => this.handleSelect(e, product.data.variation.sku, {name: attribute.name, value: attr})}
                                        name={attribute.name}
                                        checked={product.data.variation.attributes[i].value === attr}
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
                        <Button title="Добавить в корзину" type="primary" action={() => this.addToCart(product.data.variations[0].sku)} />
                      </div>

                    </div>
                  </div>
                </Fragment>
              )
            }
          </div>
        </div>
      </Layout>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  fetchProduct: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  fetchProduct,
};

const mapStateToProps = (state, ownProps) => ({
  product: state.product,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);