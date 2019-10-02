import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContentLoader from 'react-content-loader';
import config from '../../config';
import * as actions from '../actions/productVariantActions';
import { addProductToCart } from '../../cart/actions/cartActions';
import Button from '../../common/components/button/Button.jsx';
import Select from '../../common/components/select/Select.jsx';
import Locale from '../../utils/locale.jsx';
import { Carousel } from 'react-responsive-carousel';
import Breadcrumbs from '../../common/components/breadcrumbs'

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

export class Product extends Component {

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
  //   return [dispatch(actions.getProductVariantByID(1, ""))];
  // }

  componentDidMount() {
    this.props.reset()
    this.props.getProductVariantByID(Number(this.props.match.params.productID.split("-")[0]), "")
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
  
  addToCart = (productVariant) => {

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
    this.props.addProductToCart(productVariant)
  }

  switchElement = ({ productVariant, errors, fetching }) => {
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
      case productVariant && Object.keys(productVariant).length > 0:
        return (
          <Fragment>
            <div className="product__description__image">
              <Carousel axis="horizontal">
                <div>
                    <img src={`${config.imagePath.dev_path_full}${productVariant.product_id}.jpg`} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={`${config.imagePath.dev_path_full}${productVariant.product_id}.jpg`} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={`${config.imagePath.dev_path_full}${productVariant.product_id}.jpg`} />
                    <p className="legend">Legend 3</p>
                </div>
              </Carousel>
              {/* <img src={`${config.imagePath.dev_path_full}${productVariant.product_id}.jpg`} alt="" /> */}
            </div>

            <div className="product__description__block">

              <div className="information">
                <div className="description">{productVariant.decription}</div>

                <table className="categories">
                  <tbody>
                    {
                      Object.keys(productVariant.attributes) && Object.keys(productVariant.attributes).map((category, i) => (
                        <tr key={i}>
                          <td className="pi_table_td">{locale.get(category)}</td>
                          <td className="pi_table_td">
                            {
                              locale.has(Array.isArray(productVariant.attributes[category]) ? productVariant.attributes[category].join(", ") : productVariant.attributes[category])
                              ? locale.get(Array.isArray(productVariant.attributes[category]) ? productVariant.attributes[category].join(", ") : productVariant.attributes[category])
                              : Array.isArray(productVariant.attributes[category]) ? productVariant.attributes[category].join(", ") : productVariant.attributes[category] 
                            }
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>

                <div className="price">
                  {
                    this.state.select.value == "" ? "от " + productVariant.price_override + " руб." : productVariant.price_override + " руб."
                  }
                </div>

                <div className="elements">

                  <div className="size_select">
                    <Select
                      error={this.state.select.error}
                      placeholder="Выбери размер"
                      name="value"
                      title="Выбери размер"
                      options={productVariant.sizes}
                      value={this.state.select.value}
                      handleChange={(e) => this.handleSelect(e, productVariant.product_id)} />
                  </div>

                  <div className="add_to_cart">
                    <Button 
                      title="Добавить в корзину"
                      type="primary"
                      action={() => this.addToCart(productVariant)} />
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
      <div className="product__description">
        <section className="search_content">
          <div className="search_wrapper">
            <Breadcrumbs options={{excludePaths: ["/wallart/posters/1-pstr-veselye"]}} />
          </div>
        </section>
        <div className="product__description__content">
          { this.switchElement(this.props) }
        </div>
      </div>
    )
  }
}

Product.propTypes = {
  productVariant: PropTypes.PropTypes.shape(productProp).isRequired,
  errors: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  getProductByID: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  match: PropTypes.shape(matchProp).isRequired,
  addProductToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  productVariant: state.productVariant.productVariant,
  errors: state.productVariant.errors,
  fetching: state.productVariant.fetching,
})

export default connect(mapStateToProps, { ...actions, addProductToCart })(Product)
