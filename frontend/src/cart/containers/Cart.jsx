import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCart } from '../actions/cartActions';
import PropTypes from 'prop-types';
import CartTable from "../components/CartTable"

class Cart extends Component {

  componentWillMount() {
    this.props.loadCart()
  }

  render() {
    
    console.log('RENDER <Cart>');

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cart">

              <h2 className="cart-title">Cart</h2>

              <CartTable products={this.props.products} />
             
              <div className="to-order">
                  <button type="button">Оформить заказ</button>
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
  products: PropTypes.array.isRequired,
  newProduct: PropTypes.object,
  removeProduct: PropTypes.func,
  productToRemove: PropTypes.object
};

const mapStateToProps = state => ({
  products: state.cart.products,
})


export default connect(mapStateToProps, { loadCart })(Cart)