import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContentLoader from 'react-content-loader';
import config from '../../config';
import * as actions from '../actions/productInfoActions';
import { addProductToCart } from '../../cart/actions/cartActions';
import Button from '../../common/components/button/Button';

import Locale from '../../utils/locale';

import {
  productProp,
  matchProp,
} from '../../utils/props'
import { log } from 'util';

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

export class ProductDescription extends Component {
  constructor(props) {
    super(props)
    const { reset, getProductByID, match } = this.props
    // reset()
    // getProductByID(match.params.productID)
  }

  // static fetching ({ dispatch }) {
  //   return [dispatch(this.props.getProductByID(match.params.productID))];
  // }

  componentDidMount() {
    // this.props.getProductByID(this.props.match.params.productID)
  }

  switchElement = ({ location, data, errors, fetching, addProductToCart }) => {

    let datas = {}

    if (location.state != undefined) {
      datas =  location.state.product
    }

    switch (true) {
      case fetching:
        return <MyLoader />
      case errors:
        return (
          <div style={{ marginTop: '200px' }}>
            <strong>ERROR:</strong>
            {` ${errors.message}`}
          </div>
        )
      case datas && Object.keys(datas).length > 0:
        return (
          <Fragment>
            <div className="product__desc__image">
              <img src={`${config.imagePath.dev_path_full}${datas.name}${datas.ext}`} alt="" />
            </div>

            <div className="product__desc__block">

              {/* <div className="analog__design">
                <p> Lorem ipsum dolor</p>
              </div> */}

              <div className="information">
                <div className="description">{datas.decription}</div>

                <table className="categories">
                  <tbody>
                    {
                      Object.keys(datas.categories) && Object.keys(datas.categories).map((category, i) => (
                        <tr key={i}>
                          <td className="pi_table_td">{category}</td>
                          <td className="pi_table_td">
                            {
                              Array.isArray(datas.categories[category]) 
                              ? datas.categories[category].join(", ") 
                              : datas.categories[category]
                            }
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>

                <div className="price">
                  {datas.price}
                  {' руб.'}
                </div>

                <div className="add_to_cart">
                  <Button 
                    title="Добавить в корзину"
                    type="primary"
                    action={() => addProductToCart(datas)} />
                </div>
              </div>
            </div>
          </Fragment>
        )
      default:
        return null
    }
  }

  render() {

    return (
      <div className="product__desc">
        { this.switchElement(this.props) }
      </div>
    )
  }
}

ProductDescription.propTypes = {
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


export default connect(mapStateToProps, { ...actions, addProductToCart })(ProductDescription)
