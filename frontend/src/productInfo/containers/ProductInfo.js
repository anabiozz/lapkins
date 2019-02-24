import React, { Component } from 'react';
import { getProductByID, reset, dismissError } from '../actions/productInfoActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config'; 

export class ProductInfo extends Component {

  componentWillMount() {
    this.props.reset()
  }

  componentDidMount() {
    this.props.getProductByID(this.props.match.params.productID);
  } 

  render() {

    const { productInfo } = this.props;

    return (
      <div className='product'>
        {
          productInfo.errors && <div style={{marginTop: '200px'}}>
              <strong>ERROR:</strong> {productInfo.errors.message}
          </div>
        }
        {
          productInfo.data && Object.keys(productInfo.data).length > 0 && <div> 
            <div className='image'>
              <div className='inner'>
                <img src={`${config.imagePath.preview}${productInfo.data.name}_thumb${productInfo.data.ext}`} alt=''/>
              </div>
            </div>
            <div className='categories'>
            {
              productInfo.data.categories && Object.keys(productInfo.data.categories).map((key, index) => {
                return  <div key={index}>{productInfo.data.categories[key]}</div>
              })
            }
            </div>
          </div>
        }
        </div>
    )
  }
}
 
// ProductInfo.propTypes = { 
//   getProductByID: PropTypes.func.isRequired,
//   productInfo: PropTypes.object.isRequired, 
// }; 
 
const mapStateToProps = state => ({ 
  productInfo: state.productInfo
}) 
 
export default connect(mapStateToProps, { getProductByID, reset, dismissError })(ProductInfo) 
