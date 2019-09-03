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
      console.log(match.params.productType);
      // getProducts(config.productTypes.indexOf(match.params.productType) + 1)
    }
  }

  componentDidMount() {
    // const { getProducts, match } = this.props
    // getProducts(config.productTypes.indexOf(match.params.productType) + 1)
  }

  render() {
    const { data, errors, fetching, match, addProductToCart } = this.props

    let datas = [
      {"id": 1, "name": "1", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 2, "name": "2", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 3, "name": "3", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 4, "name": "4", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 5, "name": "5", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 6, "name": "6", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 7, "name": "7", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 8, "name": "8", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 9, "name": "9", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 10, "name": "10", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 11, "name": "11", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 12, "name": "12", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 13, "name": "13", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 14, "name": "14", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 15, "name": "15", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 16, "name": "16", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 17, "name": "17", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
      {"id": 18, "name": "18", "ext": ".jpg", "categories": [{"authors":["lapkins", "zhopkins"]}], "decription": "dasdwdqwdq", "price": 50},
    ]

    console.log(errors);

    console.log('RENDER <Products>')

    return (
      // <section className="catalog__navigation">

      // </section>
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
          datas && datas.length > 0 && datas.map(product => (
            <Product 
              key={product.id} 
              url={`${config.imagePath.dev_path_preview}${product.name}_thumb${product.ext}`} 
              product={product}
              productType={match.params.productType}
              addProductToCart={addProductToCart} />
          ))
        }
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