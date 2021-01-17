import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Product from '../components/Product.js';
import Loader from '../../common/Loader';
import { fetchProductsByCategory } from '../../../actions';
import PropTypes from 'prop-types';
import Layout from '../../layout/containers/Layout';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProductsByCategory(this.props.match.params.basic);
  }

  componentDidUpdate(prevProps) {
    let basicCategory = this.props.match.params.basic;
    if (prevProps.match.params.basic !== basicCategory) {
      this.props.fetchProductsByCategory(this.props.match.params.basic);
    }
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
  fetchProductsByCategory: PropTypes.func.isRequired,
  match: PropTypes.any,
};

const mapDispatchToProps = {
  fetchProductsByCategory,
};

const mapStateToProps = (state, ownProps) => ({
  fetching: state.products.fetching,
  errors: state.products.errors,
  products: state.products.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);