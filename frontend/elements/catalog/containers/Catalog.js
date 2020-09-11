import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Product from '../components/Product.js';
import Loader from '../../common/components/Loader';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import { fetchProducts } from '../../../actions';
import {getProducts} from '../../../selectors';
import PropTypes from 'prop-types';
import Layout from '../../layout/containers/Layout';

class Catalog extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    console.log('RENDER <Catalog>');

    const { catalog } = this.props;

    console.log(catalog);

    return (
      <Layout>
        <Fragment>
          <section className="breadcrumbs-wrapper">
            <Breadcrumbs />
          </section>

          <div className="catalog">
            {
              catalog.fetching && <Loader />
            }
            {
              !catalog.fetching && (!catalog.data || catalog.data.length === 0) && (
                <span>Данные товары на данный момент отсутствуют</span>
              )
            }
            {
              <div className="products">
                {
                  !catalog.fetching && catalog.data && catalog.data.map((product, i) => (
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

Catalog.propTypes = {
  catalog: PropTypes.object.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchProducts,
};

const mapStateToProps = (state, ownProps) => ({
  catalog: state.catalog,
  // products: getProducts(state, ownProps),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);