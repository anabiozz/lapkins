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
      getProducts(config.productTypes[match.path.split('/')[2]])
    }
  }

  componentDidMount() {
    const { getProducts, match } = this.props
    getProducts(config.productTypes[match.path.split('/')[2]])
  }

  render() {
    const { data, errors, fetching, match, addProductToCart } = this.props

    console.log('RENDER <Products>')

    return (
      <div className="products__catalog">
        {/* <div className="catalog">
          <ul className="cat-nav dt102_1">
            <li className="cat-nav-item dt102_li1">
                <span className="cat-nav-item_li ">
                  <a className="link dt102_bold">Женщинам</a> 
                  <span className="cat-nav-cnt">226</span>
                </span>  
                <ul className="cat-nav cat-nav-sub dt102_2">
                  <li className="cat-nav-item dt102_li2"> 
                    <span className="cat-nav-item_li"> 
                      <a className="link">Обувь</a> 
                      <span className="cat-nav-cnt">107</span> 
                    </span>  
                  </li>
                  <li className="cat-nav-item dt102_li2"> 
                    <span className="cat-nav-item_li"> 
                      <a className="link">Одежда</a> 
                      <span className="cat-nav-cnt">75</span> 
                    </span>  
                  </li>
                  <li className="cat-nav-item dt102_li2"> 
                    <span className="cat-nav-item_li"> 
                      <a className="link" >Аксессуары</a> 
                     <span className="cat-nav-cnt">44</span> 
                    </span>  
                  </li>
                  <li className="cat-nav-item dt102_li2"> 
                    <span className="cat-nav-item_li"> 
                      <a className="link" >Спорт</a> 
                      <span className="cat-nav-cnt">11</span> 
                    </span>  
                  </li>
                </ul>  
            </li>
          </ul>
        </div> */}
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
                url={`${config.imagePath.dev_path_preview}${product.id}_thumb.jpg`} 
                product={product}
                productType={match.path}
                addProductToCart={addProductToCart} />
            ))
          }
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