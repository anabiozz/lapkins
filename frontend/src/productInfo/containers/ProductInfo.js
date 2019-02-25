import React, { Component, Fragment } from 'react';
import { getProductByID, reset, dismissError } from '../actions/productInfoActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config'; 

import {
  Locale
} from '../../utils/locale';

const locale = new Locale().getLocale("RU")

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
      <div className="product_info">
        {
          productInfo.errors && <div style={{marginTop: "200px"}}>
              <strong>ERROR:</strong> {productInfo.errors.message}
          </div>
        }
        {
          productInfo.data && Object.keys(productInfo.data).length > 0 && 
          <Fragment> 

            <div className="image">
              <img src={`${config.imagePath.full}${productInfo.data.name}${productInfo.data.ext}`} alt=""/>
            </div>

            <div className="information">
              <div className="description">{productInfo.data.decription}</div>

              {/* Table categories */}
              <table className="categories">
                <tbody>
                  {
                  
                    productInfo.data.categories && Object.keys(productInfo.data.categories).map((key, index) => {
                      return  <tr key={index}>
                                <td className="pi_table_td">{locale.get(key)}</td>
                                <td className="pi_table_td">{productInfo.data.categories[key]}</td>
                              </tr>
                    })
                    
                  }
                </tbody>
              </table>

              <div className="price">{productInfo.data.price} руб.</div>
            </div>

            <div className="add_to_cart">

            </div>
          </Fragment>
        }
        </div>
    )
  }
}
{/* <div className='categories' key={index}><span>{locale.get(key)}</span> {productInfo.data.categories[key]}</div> */}


// ProductInfo.propTypes = { 
//   getProductByID: PropTypes.func.isRequired,
//   productInfo: PropTypes.object.isRequired, 
// }; 
 
const mapStateToProps = state => ({ 
  productInfo: state.productInfo
}) 
 
export default connect(mapStateToProps, { getProductByID, reset, dismissError })(ProductInfo) 
