import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContentLoader from 'react-content-loader';
import config from '../../config';
import * as actions from '../actions/productInfoActions';
import { addProductToCart } from '../../cart/actions/cartActions';
import Button from '../../common/components/button/Button';
import Select from '../../common/components/select/Select';
import Locale from '../../utils/locale';

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

export class ProductDescription extends Component {

  constructor() {
    super()
    this.state = {
      select: {
        value: "",
        error: false,
      },
    }
  }

  // static fetching ({ dispatch }) {
  //   return [dispatch(this.props.getProductByID(this.props.match.params.productID))];
  // }

  componentDidMount() {
    this.props.reset()
    this.props.getProductVariantByID(this.props.match.params.productID, "")
  }

	handleSelect = (e, product_id) => {
    const value = e.currentTarget.value;
		const name = e.currentTarget.name;
    
		this.setState(prevState => ({
			select: {
				...prevState.select,
				[name]: value,
			}
    }));
    
    this.props.reset()
    this.props.getProductVariantByID(product_id, value)
  }
  
  addToCart = (data) => {

    if (this.state.select.error) {
      this.setState(prevState => ({
        select: {
          ...prevState.select,
          error: false,
        }
      }));
      return
    }
   
    if (this.state.select.value == "") {
      this.setState(prevState => ({
        select: {
          ...prevState.select,
          error: true,
        }
      }));

      setTimeout(() => {

        this.setState(prevState => ({
          select: {
            ...prevState.select,
            error: false,
          }
        }));
      
      }, 1000)
      return
    } 
    this.props.addProductToCart(data)
  }

  switchElement = ({ data, errors, fetching }) => {

    if (this.props.location.state != undefined) {
      console.log(this.props.location.state);
    }

    console.log(this.state.select.error);

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
                  {
                    this.state.select.value == "" ? "от " + data.price_override + " рублей" : data.price_override + " рублей"
                  }
                </div>

                <div className="elements">

                  <div className="size_select">
                    <Select
                      error={this.state.select.error}
                      placeholder="Выбери размер"
                      name="value"
                      title="Выбери размер"
                      options={data.sizes}
                      value={this.state.select.value}
                      handleChange={(e) => this.handleSelect(e, data.product_id)} />
                  </div>

                  <div className="add_to_cart">
                    <Button 
                      title="Добавить в корзину"
                      type="primary"
                      action={() => this.addToCart(data)} />
                  </div>

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
       <div class="wrapper" data-anim="base wrapper">
        <div class="circle" data-anim="base left"></div>
        <div class="circle" data-anim="base right"></div>
      </div>
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
