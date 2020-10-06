import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel';
import Loader from '../../common/Loader';
import Button from '../../common/Button';
import { fetchProduct, addToCart } from '../../../actions';
import Layout from '../../layout/containers/Layout';

class Product extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.sku);
  }

  handleSelect (e, currentAttrs, sku, newAttr) {
    const { product, history } = this.props;

    let newAttributes =  R.clone(currentAttrs);
    let newSKU = sku;
    let attrToChange = R.find(R.propEq('name', newAttr.name), newAttributes);
    attrToChange.value = newAttr.value;

    product.data.variations.forEach(variation => {
      if (R.equals(newAttributes, variation.attributes)) {
        newSKU = variation.sku;
      }
    });

    this.props.fetchProduct(newSKU);
    history.push('/product/' + newSKU);
  }

  addToCart(product) {
    this.props.addToCart(product);
  }

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
              !product.fetching && (!product.data || R.isEmpty(product.data)) && (
                <span>Данный товар отсутствует</span>
              )
            }
            {
              !product.fetching && product.data && !R.isEmpty(product.data) && (
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
                        { product.data.description }
                      </div>

                      <div className="variations">
                        {
                          product.data.attributes && product.data.attributes.map((attribute, i) => (
                            <form key={i}>
                              <div className='radio-group-title'>{attribute.name}</div>
                              <div className="radio-group">
                                {
                                  attribute.value && attribute.value.map((attr, j) => (
                                    <Fragment key={j}>
                                      <input
                                        value={attr}
                                        type="radio"
                                        id={`option-${i}-${j}`}
                                        onChange={(e) => this.handleSelect(
                                          e,
                                          product.data.variation.attributes,
                                          product.data.variation.sku,
                                          {name: attribute.name, value: attr},
                                        )}
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
                        <Button title="Добавить в корзину" type="primary" action={() => this.addToCart(product.data)} />
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
  addToCart: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  fetchProduct,
  addToCart,
};

const mapStateToProps = (state, ownProps) => ({
  product: state.product,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);