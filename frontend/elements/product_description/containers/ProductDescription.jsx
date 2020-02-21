import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../../config';
import * as actions from '../actions/actions';
import { addItemToCart, increaseCartItemQuantity } from '../../cart/actions';
import Button from '../../common/components/Button';
import { Carousel } from 'react-responsive-carousel';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import Loader from '../../common/components/Loader';
import { withCookies, useCookies } from 'react-cookie';
import v4 from 'uuid/v4';

import {
  productProp,
  matchProp,
} from '../../../utils/props';
import Counter from "../../common/components/Counter";

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
    return [dispatch(actions.getVariation(path, ""))];
  }

  componentDidMount() {
    let { reset, getVariation, match, cookies, cartSession } = this.props;
    reset();

    // cookies.remove('cartSession');

    getVariation(Number(match.params.variationID), 0);
    if (!this.state.cartSession) {
      const uuid = v4();
      cookies.set('cartSession', uuid);
      this.setState(prevState => ({
        cartSession: {
          ...prevState.cartSession,
          uuid,
        }
      }));
    }
  }

	handleSelect = (e, variationID) => {
    let value = e.currentTarget.value;
		const name = e.currentTarget.name;

		if (value !== this.state.select.value) {
      this.setState(prevState => ({
        select: {
          ...prevState.select,
          [name]: value,
        }
      }));

      this.props.reset();
      this.props.getVariation(variationID, value)
    }
  };
  
  addToCart = (item) => {
    this.props.addItemToCart(item.variation_id, this.state.cartSession, item, item.size);
  };

  render() {

    const { item, errors, fetching } = this.props;

    if (item.size && item.size !== "" && this.state.select.value === "") {
      this.setState(prevState => ({
        select: {
          ...prevState.select,
          value: item.size,
        }
      }));
    }

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

                    <div className="name">{item.name}</div>

                    <div className="price">
                      {
                        item.price + " руб."
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

                    <div className="size">
                      <form>
                        <div className="radio-group">
                        {
                          item.sizes && item.sizes.map((size, i) => (
                            <Fragment key={i}>
                              <input
                                value={size.size_object.key}
                                type="radio"
                                id={`option-${i}`}
                                onChange={(e) => this.handleSelect(e, item.variation_id)}
                                name="value"
                                checked={item.size === size.size_object.key}
                              />
                              <label htmlFor={`option-${i}`}>{size.size_object.value}</label>
                            </Fragment>
                          ))
                        }
                        </div>
                      </form>
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
  getVariation: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  match: PropTypes.shape(matchProp).isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  item: state.product_description.item,
  errors: state.product_description.errors,
  fetching: state.product_description.fetching,
  cookies: ownProps.cookies,
  cartSession: state.cart.cartSession,
  reset: state.product_description.reset,
});

export default withCookies(connect(mapStateToProps, { ...actions, addItemToCart, increaseCartItemQuantity })(ProductDescription))
