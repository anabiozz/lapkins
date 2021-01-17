import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel';
import Loader from '../../common/Loader';
import Button from '../../common/Button';
import { fetchProduct, addToCart } from '../../../actions';
import Layout from '../../layout/containers/Layout';
import { getProduct } from '../../../selectors';

class Product extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.sku);
  }

  handleSelect (e, bit, attrId) {
    const { product, history } = this.props;
    let bits = 0;
    product.data.variation.attributes.forEach(attr => {
      if (attr.attrId !== attrId) {
        bits |= attr.bit;
      }
    });

    bits |= bit;

    product.data.variations.forEach(variation => {
      if (variation.bits === bits) {
        this.props.fetchProduct(variation.sku);
        history.push('/product/' + variation.sku);
      }
    });
  }

  addToCart(product) {
    this.props.addToCart(product);
  }

  render() {
    console.log('RENDER <Product>');

    const { product } = this.props;

    console.log(product);

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

                      <div className="name">{product.data.variation.title}</div>

                      <div className="price">
                        { product.data.variation.price + ' руб.' }
                      </div>

                      <div className="description">
                        { product.data.variation.description }
                      </div>

                      <div className="variations">
                        {
                          product.data.product.attributes && product.data.product.attributes.map((attribute, i) => (
                            <form key={i}>
                              <div className='radio-group-title'>{attribute.name}</div>
                              <div className="radio-group">
                                {
                                  attribute.value && attribute.value.map((attrValue, j) => (
                                    <Fragment key={j}>
                                      <input
                                        value={attrValue.bit}
                                        type="radio"
                                        id={`option-${i}-${j}`}
                                        onChange={e => this.handleSelect(e, attrValue.bit, attrValue.attrId)}
                                        name={attribute.name}
                                        checked={product.data.variation.attributes[i].value === attrValue.value}
                                      />
                                      <label htmlFor={`option-${i}-${j}`}>{attrValue.value}</label>
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