import React, { Component } from 'react';
import config from '../../config';
import { connect } from 'react-redux';
import * as actions from '../actions/cartActions';
import PropTypes from 'prop-types';

import Locale from '../../utils/locale';
const locale = new Locale('RU').get()
class Cart extends Component {

  componentDidMount() {
    
  }


  componentWillReceiveProps(nextProps) {

    console.log(nextProps);
    
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }
  }

  addProduct = product => {
    const { cartProducts, updateCart } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    // updateCart(cartProducts);
  };


  render() {
    
    console.log('RENDER <Cart>');

    const { productToAdd, cartProducts } = this.props

    console.log(cartProducts);

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cart">
                <h2 className="cart-title">Cart</h2>
                <div className="cart-table">
                  <div className="image">
                    <img src={`${config.imagePath.preview}${productToAdd.name}${productToAdd.ext}`} alt="" />
                  </div>
                  <div className="information">
                    <div className="description">{productToAdd.decription}</div>

                    <table className="categories">
                      <tbody>
                        {
                          productToAdd.categories && Object.keys(productToAdd.categories).map(key => (
                            <tr key={key}>
                              <td className="pi_table_td">{locale.get(key)}</td>
                              <td className="pi_table_td">{productToAdd.categories[key]}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>

                    <div className="price">
                      {productToAdd.price}
                      {' руб.'}
                    </div>

                    <div className="to-order">
                      <button type="button">Заказать</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
  loadCart: PropTypes.func.isRequired,
  // updateCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.array.isRequired,
  newProduct: PropTypes.object,
  removeProduct: PropTypes.func,
  productToRemove: PropTypes.object
};

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  productToAdd: state.cart.productToAdd,
  errors: state.cart.errors,
  fetching: state.cart.fetching,
})


export default connect(mapStateToProps, {...actions })(Cart)