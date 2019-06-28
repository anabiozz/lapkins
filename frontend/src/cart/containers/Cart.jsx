import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCart } from '../actions/cartActions';
import ContentLoader from 'react-content-loader'
import PropTypes from 'prop-types';
import CartTable from "../components/CartTable"

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


class Cart extends Component {

  componentWillMount() {
    this.props.loadCart()
  }

  render() {
    console.log('RENDER <Cart>');

    const { products, errors, fetching } = this.props;

    console.log(products);

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cart">
              <h2 className="cart__title">ОФОРМЛЕНИЕ ЗАКАЗА</h2>

              {
                fetching && <MyLoader />
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
                products && products.length == 0 ? <div className="cart__no__product">В вашей корзине пока нет товаров</div> : <CartTable products={this.props.products} /> 
              }

            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Cart.propTypes = {
//   loadCart: PropTypes.func.isRequired,
//   // updateCart: PropTypes.func.isRequired,
//   products: PropTypes.array.isRequired,
//   newProduct: PropTypes.object,
//   removeProduct: PropTypes.func,
//   productToRemove: PropTypes.object
// };

const mapStateToProps = state => ({
  products: state.cart.products,
  errors: state.cart.errors,
  fetching: state.cart.fetching,
})

export default connect(mapStateToProps, { loadCart })(Cart)