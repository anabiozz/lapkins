import React, { Component } from 'react';
import config from '../../config';
import { connect } from 'react-redux';
import * as actions from '../actions/cartActions';

import Locale from '../../utils/locale';
const locale = new Locale('RU').get()
class Cart extends Component {

  render() {

    console.log('RENDER <Cart>');

    const { productToAdd } = this.props

    console.log(productToAdd);

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cart">
                <h2 className="cart-title">Cart</h2>
                <div className="cart-table">
                  <div className="image">
                    <img src={`${config.imagePath.full}${productToAdd.name}${productToAdd.ext}`} alt="" />
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

const mapStateToProps = state => ({
  productToAdd: state.cart.productToAdd,
  errors: state.cart.errors,
  fetching: state.cart.fetching,
})


export default connect(mapStateToProps, {...actions })(Cart)