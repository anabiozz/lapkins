import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Product from '../components/Product.js';
import Loader from '../../common/Loader';
import Breadcrumbs from '../../common/Breadcrumbs';
import { fetchProducts, fetchVariations } from '../../../actions';
import {getProducts} from '../../../selectors';
import PropTypes from 'prop-types';
import Layout from '../../layout/containers/Layout';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchVariations();
  }

  render() {
    console.log('RENDER <Products>');

    const { products, fetching } = this.props;

    return (
      <Layout>
        <Fragment>
          <div className="catalog">
            {
              fetching && <Loader />
            }
            {
              !fetching && (!products || products.length === 0) && (
                <span>Данные товары на данный момент отсутствуют</span>
              )
            }
            {
              <div className="products">
                {
                  !fetching && products && products.map((product, i) => (
                    <Product key={i} product={product} />
                  ))
                }
              </div>
            }
          </div>
        </Fragment>
      </Layout>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  fetchVariations: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchProducts,
  fetchVariations,
};

const mapStateToProps = (state, ownProps) => ({
  fetching: state.products.fetching,
  errors: state.products.errors,
  products: getProducts(state, ownProps),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);