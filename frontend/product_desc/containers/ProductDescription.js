import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContentLoader from 'react-content-loader';
import config from '../../config';
import * as actions from '../actions/productInfoActions';
import { addProductToCart } from '../../cart/actions/cartActions';
import Button from '../../common/components/button/Button';
import Select from '../../common/components/Select';
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

  constructor() {
    super()
    this.state = {
      select_value: "",
    }
  }


  // static fetching ({ dispatch }) {
  //   return [dispatch(this.props.getProductByID(this.props.match.params.productID))];
  // }

  componentDidMount() {
    this.props.reset()
    this.props.getProductByID(this.props.match.params.productID)
  }

  getProductVariant = (id) => {
    this.props.reset()
    this.props.getProductVariantByID(id)
  }

  switchElement = ({ data, errors, fetching, addProductToCart }) => {

    if (this.props.location.state != undefined) {
      console.log(this.props.location.state);
    }

    console.log(data);

    

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
      case data && Object.keys(data).length > 0:
        return (
          <Fragment>
            <div className="product__desc__image">
              <img src={`${config.imagePath.dev_path_full}${data.product_id}.jpg`} alt="" />
            </div>

            <div className="product__desc__block">

              {/* <div className="analog__design">
                <p> Lorem ipsum dolor</p>
              </div> */}

              <div className="information">
                <div className="description">{data.decription}</div>

                <table className="categories">
                  <tbody>
                    {
                      Object.keys(data.attributes) && Object.keys(data.attributes).map((category, i) => (
                        <tr key={i}>
                          <td className="pi_table_td">{locale.get(category)}</td>
                          <td className="pi_table_td">
                            {
                              locale.has(Array.isArray(data.attributes[category]) ? data.attributes[category].join(", ") : data.attributes[category])
                              ? locale.get(Array.isArray(data.attributes[category]) ? data.attributes[category].join(", ") : data.attributes[category])
                              : Array.isArray(data.attributes[category]) ? data.attributes[category].join(", ") : data.attributes[category] 
                            }
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>

                <div className="price">
                 от {data.price_override} рублей
                </div>

                <div className="size_select">
                  <Select
                    placeholder="Выбери размер"
                    name="size_select"
                    title="Выбери размер"
                    options={data.sizes}
                    value={this.state.select_value}
                    handleChange={() => this.getProductVariant(this.props.match.params.productID)} />
                </div>

                <div className="add_to_cart">
                  <Button 
                    title="Добавить в корзину"
                    type="primary"
                    action={() => addProductToCart(data)} />
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
