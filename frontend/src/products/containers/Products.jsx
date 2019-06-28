import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'

import Product from '../components/Product'
import * as actions from '../actions/productActions'
import config from '../../config'
import { addProductToCart } from '../../cart/actions/cartActions';

import {
  productProp,
} from '../../utils/props'

const MyLoader = props => (
  <ContentLoader
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)

class Products extends Component {

  componentWillReceiveProps(nextProps) {
    const { getProducts, match } = nextProps;
    if (match.url !== this.props.match.url) {
      getProducts(config.productTypes.indexOf(match.params.productType) + 1)
    }
  }

  componentDidMount() {
    const { getProducts, match } = this.props
    getProducts(config.productTypes.indexOf(match.params.productType) + 1)
  }

  render() {
    const { data, errors, fetching, match, addProductToCart } = this.props

    console.log('RENDER <Products>')

    return (
     <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="products">
              {
                fetching && <MyLoader />
              }
              {
                errors && (
                <div style={{ marginTop: '200px' }}>
                  <strong>ERROR: </strong>
                  {errors.message}
                </div>
                )
              }
              {
                data && data.length > 0 && data.map(product => (
                  <Product 
                    key={product.id} 
                    url={`${config.imagePath.preview}${product.name}_thumb${product.ext}`} 
                    product={product}
                    productType={match.params.productType}
                    addProductToCart={addProductToCart} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Products.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(productProp).isRequired).isRequired,
  errors: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired,
  addProductToCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  data: state.products.data,
  errors: state.products.errors,
  fetching: state.products.fetching,
})

export default connect(mapStateToProps, { ...actions, addProductToCart })(Products)