import React, { Component } from 'react';
import { getProductByID } from '../actions/productInfoActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config'; 

export class ProductInfo extends Component {

  componentDidMount() { 
    this.props.getProductByID(this.props.match.params.productID); 
  } 

  render() {

    const { productInfo } = this.props;

    return (
      <div>
       <div className='product'>
          <div className='image'>
            <div className='inner'>
              <img src={`${config.PATH.preview}${productInfo.name}_thumb${productInfo.ext}`} alt=''/>
            </div>
          </div>
          <div className='categories'>
            {
              productInfo.categories && Object.keys(productInfo.categories).map((key, index) => {
                return  <div key={index}>{productInfo.categories[key]}</div>
              })
            }
          </div>
      </div>
      </div>
    )
  }
}
 
ProductInfo.propTypes = { 
  getProductByID: PropTypes.func.isRequired, 
  productInfo: PropTypes.object.isRequired, 
}; 
 
const mapStateToProps = state => ({ 
  productInfo: state.productInfo.item
}) 
 
export default connect(mapStateToProps, { getProductByID })(ProductInfo) 
