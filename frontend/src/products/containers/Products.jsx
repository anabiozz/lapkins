import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Product from '../components/Product'
import * as actions from '../actions/productActions'
import config from '../../config'

import {
  productProp,
} from '../../utils/props'

class Products extends Component {
  componentDidMount() {
    const { getProducts } = this.props
    getProducts()
  }

  render() {
    const { data, errors, fetching } = this.props

    console.log('RENDER <Products>')

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="products">
              {
                fetching && (
                <div style={{ marginTop: '200px' }}>
                  <strong>FETCHING</strong>
                </div>
                )
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
                  <Product key={product.id} url={`${config.imagePath.preview}${product.name}_thumb${product.ext}`} product={product} />
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
}

const mapStateToProps = state => ({
  data: state.products.data,
  errors: state.products.errors,
  fetching: state.products.fetching,
})

export default connect(mapStateToProps, { ...actions })(Products)