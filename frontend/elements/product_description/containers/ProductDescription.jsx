import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../../config';
import * as actions from '../actions/actions';
import { addItemToCart, increaseCartItemQuantity, createCartSession } from '../../cart/actions';
import Button from '../../common/components/Button';
import Select from '../../common/components/Select';
import Locale from '../../../utils/locale';
import { Carousel } from 'react-responsive-carousel';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import Loader from '../../common/components/Loader';
import { withCookies, useCookies } from 'react-cookie';

import {
  productProp,
  matchProp,
} from '../../../utils/props';

const locale = new Locale('RU').get();

export class ProductDescription extends Component {

  constructor(props) {
    super(props);

    const { cookies } = this.props;

    this.state = {
      select: {
        value: "",
        error: false,
      },
      cartSession: cookies.get('cartSession') || undefined
    };
  }

  static fetching ({ dispatch, path }) {
    console.log("path", path);
    return [dispatch(actions.getVariant(path, ""))];
  }

  componentDidMount() {

    let { reset, getVariant, match, createCartSession, cookies, cartSession } = this.props;

    reset();
    
    // this.props.cookies.remove('cartSession')

    getVariant(Number(match.params.productID), 0);

    if (!this.state.cartSession) {
      createCartSession();
      cookies.set('cartSession', cartSession);
    }
    // console.log("cartSession", this.state.cartSession);
  }

	handleSelect = (e, product_id) => {
    let value = e.currentTarget.value;
		const name = e.currentTarget.name;

		this.setState(prevState => ({
			select: {
				...prevState.select,
				[name]: value,
			}
    }));

    this.props.reset();
    this.props.getVariant(product_id, value)
  };
  
  addToCart = (item) => {

    if (this.state.select.value === "") {
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
      
      }, 1000);
      return
    } 

    if (!this.state.cartSession) {
      this.props.addItemToCart(item.variant_id, this.state.cartSession)
    } else {
      this.props.increaseCartItemQuantity(item.variant_id, this.state.cartSession)
    }
  };

  render() {

    const { item, errors, fetching } = this.props;

    return (
      <div className="product__description">

        <section className="breadcrumbs_wrapper">
          <Breadcrumbs />
        </section>

        <div className="product__description__content">
          {
            fetching && <Loader />
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
            Object.keys(item).length > 0 &&
            (
              <Fragment>

                <div className="product__description__image">
                  <Carousel axis="horizontal">
                    {
                      item.images.map((image, index) => {
                        return <div key={index}>
                            <img alt="img" src={`${config.imagePath.dev_path_full}${image}.jpg`} />
                            <p className="legend">Legend {index}</p>
                        </div>
                      })
                    }
                  </Carousel>
                </div>

                <div className="product__description__block">
                  <div className="information">

                    <div className="description">{item.decription}</div>

                    <div className="price">
                      {
                        this.state.select.value === "" ? "от " + item.price + " руб." : item.price + " руб."
                      }
                    </div>

                    <table className="categories">
                      <tbody>
                        {
                          item.attributes && item.attributes.map((attr, i) => (
                            <tr key={i}>
                              <td className="pi_table_td">{attr.key}</td>
                              <td className="pi_table_td">{attr.value}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>

                    <div className="size_select">
                      <Select
                        error={this.state.select.error}
                        placeholder="Выбери размер"
                        name="value"
                        title="Выбери размер"
                        options={item.sizes}
                        value={this.state.select.value}
                        handleChange={(e) => this.handleSelect(e, item.product_id)} />
                    </div>

                    <div className="add_to_cart">
                      <Button
                        title="Добавить в корзину"
                        type="primary"
                        action={() => this.addToCart(item)} />
                    </div>

                  </div>
                </div>
              </Fragment>
            )
          }
        </div>
      </div>
    )
  }
}

ProductDescription.propTypes = {
  item: PropTypes.shape(productProp).isRequired,
  errors: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  getVariant: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  match: PropTypes.shape(matchProp).isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  item: state.variant.item,
  errors: state.variant.errors,
  fetching: state.variant.fetching,
  cookies: ownProps.cookies,
  cartSession: state.cart.cartSession,
  reset: state.variant.reset,
});

export default withCookies(connect(mapStateToProps, { ...actions, addItemToCart, increaseCartItemQuantity, createCartSession })(ProductDescription))
