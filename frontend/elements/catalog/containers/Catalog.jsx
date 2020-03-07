import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from '../components/Item.jsx';
import * as actions from '../actions';
import config from '../../../config';
import Loader from '../../common/components/Loader';

import {
  productProp,
} from '../../../utils/props';
import Breadcrumbs from "../../common/components/Breadcrumbs";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryType: this.props.categoryType,
    };
  }

  static fetching ({ dispatch, path }) {
    // return [dispatch(actions.getProducts(""))];
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.categoryType !== this.state.categoryType) {
      const { getProducts, match, reset } = this.props;
      reset();
      getProducts(match.params.categoryType);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.match.params.categoryType !== prevState.categoryType) {
      return {categoryType : nextProps.match.params.categoryType};
    }
    else return null;
  }

  componentDidMount() {
    const { getProducts, match, reset } = this.props;
    reset();
    getProducts(match.params.categoryType);
  }

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    const { items, errors, fetching, match } = this.props;

    console.log('RENDER <Catalog>');

    return (
      <Fragment>
        <section className="breadcrumbs-wrapper">
          <Breadcrumbs />
        </section>

        <div className="catalog">

          <div className="products">
            {
              fetching && <Loader />
            }
            {
              errors && (
                <div><strong>ERROR:</strong>{errors.message}</div>
              )
            }
            {
              !errors && items && items.length === 0 && (
                <span>Данная категория товара на данный момент отсутствует.</span>
              )
            }
            {
              !errors && items.map(product => (
                <Item
                  key={product.variation_id}
                  imgUrl={`${config.imagePath.dev_path_preview}${product.variation_id}/product_img/1_thumb.jpg`}
                  product={product}
                  url={match.url}
                />
              ))
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

Catalog.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(productProp).isRequired).isRequired,
  errors: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.products.items,
  errors: state.products.errors,
  fetching: state.products.fetching,
});

export default connect(mapStateToProps, { ...actions })(Catalog);