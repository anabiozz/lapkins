import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Product from '../components/Product'
import { getProducts, dismissError, reset } from '../actions/productActions'
import config from '../../config'

class Products extends Component {
  componentWillMount() {
    const { getProducts } = this.props
    getProducts()
  }

  render() {
    const { products } = this.props
    console.log('RENDER <Products>')

    return (
      <div className="products">
        {
          products.errors && (
          <div style={{ marginTop: '200px' }}>
            <strong>ERROR:</strong>
            {' '}
            {products.errors.message}
          </div>
          )
        }
        {
          products.data && products.data.length > 0 && products.data.map(product => (
            <Product key={product.id} url={`${config.imagePath.preview}${product.name}_thumb${product.ext}`} product={product} />
          ))
        }
      </div>
    )
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf.isRequired,
  getProducts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  products: state.products,
})

export default connect(mapStateToProps, { getProducts, reset, dismissError })(Products)