import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ContentLoader from 'react-content-loader'
import config from '../../config'
import * as actions from '../actions/productInfoActions'
import { addProductToCart } from '../../cart/actions/cartActions'

import Locale from '../../utils/locale'

import {
  productProp,
  matchProp,
} from '../../utils/props'

const locale = new Locale('RU').get()

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

export class ProductInfo extends Component {
  constructor(props) {
    super(props)
    const { reset, getProductByID, match } = this.props
    reset()
    getProductByID(match.params.productID)
  }

  switchElement = (productInfo, errors, fetching) => {
    switch (true) {
      case productInfo.fetching:
        return <MyLoader />
      case errors:
        return (
          <div style={{ marginTop: '200px' }}>
            <strong>ERROR:</strong>
            {` ${errors.message}`}
          </div>
        )
      case fetching:
        return (
          <div style={{ marginTop: '200px' }}>
            <strong>FETCHING</strong>
          </div>
        )
      case productInfo && Object.keys(productInfo).length > 0:
        return (
          <Fragment>
            <div className="image">
              <img src={`${config.imagePath.full}${productInfo.name}${productInfo.ext}`} alt="" />
            </div>

            <div className="information">
              <div className="description">{productInfo.decription}</div>

              <table className="categories">
                <tbody>
                  {
                    productInfo.categories && Object.keys(productInfo.categories).map(key => (
                      <tr key={key}>
                        <td className="pi_table_td">{locale.get(key)}</td>
                        <td className="pi_table_td">{productInfo.categories[key]}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>

              <div className="price">
                {productInfo.price}
                {' руб.'}
              </div>

              <div className="add_to_cart">
                <button type="button" onClick={() => addProductToCart({})}>Добавить</button>
              </div>
            </div>

          </Fragment>
        )
      default:
        return null
    }
  }

  render() {
    const { data, errors, fetching } = this.props

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product_info">
              { this.switchElement(data, errors, fetching) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ProductInfo.propTypes = {
  data: PropTypes.PropTypes.shape(productProp).isRequired,
  errors: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  getProductByID: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  match: PropTypes.shape(matchProp).isRequired,
  addProductToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  data: state.productInfo.data,
  errors: state.productInfo.errors,
  fetching: state.productInfo.fetching,
})


export default connect(mapStateToProps, { ...actions, addProductToCart })(ProductInfo)
