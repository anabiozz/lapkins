import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../../config';
import * as actions from '../actions/actions';
import { addProduct } from '../../cart/actions';
import Button from '../../common/components/Button';
import { Carousel } from 'react-responsive-carousel';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import Loader from '../../common/components/Loader';
import { withCookies } from 'react-cookie';
import v4 from 'uuid/v4';

import {
  productProp,
  matchProp,
} from '../../../utils/props';

export class ProductDescription extends Component {

  constructor(props) {
    super(props);

    this.state = {
      select: {
        value: "",
        error: false,
      },
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  static fetching ({ dispatch, path }) {
    let variationID = path.split("/");
    return [dispatch(actions.getVariation(variationID[2], 0))];
  }

  componentDidMount() {
    let { reset, getVariation, match, cookies, item } = this.props;

    reset();

    if (item.size_option_id && item.size_option_id !== "" && this.state.select.value === "") {
      this.setState(prevState => ({
        select: {
          ...prevState.select,
          value: item.size_option_id,
        }
      }));
    }

    // cookies.remove('cartSession');

    if (!cookies.get('cartSession')) {
      const uuid = v4();
      let d = new Date();
      d.setTime(d.getTime() + (7*24*60*60*1000));
      cookies.set('cartSession', uuid, {path: "/", expires: d});
      console.log(`Создана сессия: ${uuid}`);
    }

    getVariation(Number(match.params.variationID), 0);
  }

	handleSelect (e, variationID) {
    const value = e.currentTarget.value;
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
  
  addToCart (item) {
    const session = this.props.cookies.get('cartSession');
    if (session) {
      this.props.addProduct(item.variation_id, session, item, item.size_option_id);
    } else {
      console.error("Сессия не создана")
    }
  };

  render() {

    const { item, errors, fetching } = this.props;

    return (
      <Fragment>
        <section className="breadcrumbs-wrapper">
          <Breadcrumbs />
        </section>

        <div className="product-description">

          <div className="product-description-content">
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
              Object.keys(item).length > 0 && (
                <Fragment>

                  <div className="product-description-image">
                    <Carousel axis="horizontal">
                      {
                        item.images.map((image, index) => {
                          return <div key={index}>
                            <img alt="img" src={`${config.imagePath.dev_path_full}/1/300x450/1.jpg`} />
                            <p className="legend">Legend {index}</p>
                          </div>
                        })
                      }
                    </Carousel>
                  </div>

                  <div className="product-description-block">
                    <div className="information">

                      <div className="name">{item.name}</div>

                      <div className="price">
                        { item.price + " руб." }
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
                                    checked={item.size_option_id === size.size_object.key}
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
      </Fragment>
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
  addProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  item: state.product_description.item,
  errors: state.product_description.errors,
  fetching: state.product_description.fetching,
  cookies: ownProps.cookies,
  reset: state.product_description.reset,
});

export default withCookies(connect(mapStateToProps, { ...actions, addProduct })(ProductDescription))
