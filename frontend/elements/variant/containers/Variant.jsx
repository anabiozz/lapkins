import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../../config';
import * as actions from '../actions/actions';
import { addProductToCart } from '../../cart/actions';
import Button from '../../common/components/button';
import Select from '../../common/components/select';
import Locale from '../../../utils/locale';
import { Carousel } from 'react-responsive-carousel';
import Breadcrumbs from '../../common/components/breadcrumbs';
import Loader from '../../common/components/Loader';
import { withCookies } from 'react-cookie';

import {
  productProp,
  matchProp,
} from '../../../utils/props'

const locale = new Locale('RU').get()

export class Variant extends Component {

  constructor(props) {
    super(props)
    this.state = {
      select: {
        value: "",
        error: false,
      },
    }
  }

  static fetching ({ dispatch, path }) {
    return [dispatch(actions.getVariant(path.split("/")[3].split("-")[0], ""))];
  }

  componentDidMount() {
    console.log(this.props.location.pathname.split("/")[3]);
    
    this.props.getVariant(Number(this.props.match.params.productID.split("-")[0]), "")
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

    console.log(product_id);
    
    this.props.reset()
    this.props.getVariant(product_id, value)
  }
  
  addToCart = (variant) => {

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
    this.props.addProductToCart(variant)
  }

  switchElement = ({ variant, errors, fetching, cookies }) => {
    switch (true) {
      case fetching:
        return <Loader />
      case errors:
        return (
          <div style={{ marginTop: '200px' }}>
            <strong>ERROR:</strong>
            {` ${errors.message}`}
          </div>
        )
      case variant && Object.keys(variant).length > 0:
        return (
          <Fragment>
            <div className="product__description__image">
              <Carousel axis="horizontal">
                {
                  variant.images.map((image, index) => {
                    return <div key={index}>
                        <img src={`${config.imagePath.dev_path_full}${image}.jpg`} />
                        <p className="legend">Legend {index}</p>
                    </div>
                  })
                }
              </Carousel>
            </div>

            <div className="product__description__block">

              <div className="information">
                <div className="description">{variant.decription}</div>

                <table className="categories">
                  <tbody>
                    {
                      Object.keys(variant.attributes) && Object.keys(variant.attributes).map((category, i) => (
                        <tr key={i}>
                          <td className="pi_table_td">{locale.get(category)}</td>
                          <td className="pi_table_td">
                            {
                              locale.has(Array.isArray(variant.attributes[category])
                              ? variant.attributes[category].join(", ") 
                              : variant.attributes[category])
                              ? locale.get(Array.isArray(variant.attributes[category]) 
                              ? variant.attributes[category].join(", ") 
                              : variant.attributes[category])
                              : Array.isArray(variant.attributes[category]) 
                              ? variant.attributes[category].join(", ") 
                              : variant.attributes[category] 
                            }
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>

                <div className="price">
                  {
                    this.state.select.value == "" 
                    ? "от " + variant.price_override + " руб." 
                    : variant.price_override + " руб."
                  }
                </div>

                <div className="elements">

                  <div className="size_select">
                    <Select
                      error={this.state.select.error}
                      placeholder="Выбери размер"
                      name="value"
                      title="Выбери размер"
                      options={variant.sizes}
                      value={this.state.select.value}
                      handleChange={(e) => this.handleSelect(e, variant.product_id)} />
                  </div>

                  <div className="add_to_cart">
                    <Button
                      title="Добавить в корзину"
                      type="primary"
                      action={() => this.addToCart(variant)} />
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
            <Breadcrumbs />
          </div>
        </section>
        <div className="product__description__content">
          { this.switchElement(this.props) }
        </div>
      </div>
    )
  }
}

Variant.propTypes = {
  variant: PropTypes.PropTypes.shape(productProp).isRequired,
  errors: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  getVariant: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  match: PropTypes.shape(matchProp).isRequired,
  addProductToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  variant: state.variant.variant,
  errors: state.variant.errors,
  fetching: state.variant.fetching,
  cookies: ownProps.cookies,
})

export default withCookies(connect(mapStateToProps, { ...actions, addProductToCart })(Variant))
