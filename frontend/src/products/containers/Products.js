/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import Product from '../components/Product';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux'; 
import { getProducts, dismissError, reset } from '../actions/productActions';
import config from '../../config'; 
 
class Products extends Component { 
 
  componentDidMount() {
    this.props.getProducts(); 
  } 
 
  render() {

    const { products } = this.props;
    console.log('RENDER <Products>');

    return ( 
      <div className="products">
        {
          products.errors && <div style={{marginTop: '200px'}}>
              <strong>ERROR:</strong> {products.errors.message}
          </div>
        }
        {
          products.data && products.data.length > 0 && products.data.map((product) => (
            <Product key={product.id} url={`${config.imagePath.preview}${product.name}_thumb${product.ext}`} product={product} /> 
          )) 
        }
      </div> 
    ) 
  } 
} 
 
// Products.propTypes = {
//   getProducts: PropTypes.func.isRequired,
//   reset: PropTypes.func.isRequired,
//   dismissError: PropTypes.func.isRequired,
//   products: PropTypes.array.isRequired,
// }; 
 
const mapStateToProps = state => ({ 
  products: state.products
}) 

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts),
  reset: () => dispatch(reset),
  dismissError: () => dispatch(dismissError),
})
 
export default connect(mapStateToProps, {getProducts, reset, dismissError})(Products) 