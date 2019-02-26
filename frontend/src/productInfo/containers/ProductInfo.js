import React, { Component, Fragment } from 'react';
import { getProductByID, reset, dismissError } from '../actions/productInfoActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config';
import ContentLoader from "react-content-loader";

import {
  Locale
} from '../../utils/locale';

const locale = new Locale().getLocale("RU")

const MyLoader = (props) => (
  <ContentLoader
    height={160}
		width={400}
		speed={2}
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
		{...props}>
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
);

export class ProductInfo extends Component {

  componentWillMount() {
    this.props.reset()
  }

  componentDidMount() {
    this.props.getProductByID(this.props.match.params.productID);
  } 

  switchElement = productInfo => {
    switch(true) {
      case productInfo.fetching:
        return <MyLoader /> 
      case productInfo.errors:
        return <div style={{marginTop: "200px"}}>
                    <strong>ERROR:</strong> {productInfo.errors.message}
                </div>
      case productInfo.data && Object.keys(productInfo.data).length > 0:
        return <Fragment> 
                <div className="image">
                  <img src={`${config.imagePath.full}${productInfo.data.name}${productInfo.data.ext}`} alt=""/>
                </div>

                <div className="information">
                  <div className="description">{productInfo.data.decription}</div>

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

                  <div className="add_to_cart">
                    <button>Добавить</button>
                  </div>
                </div>
              
              </Fragment>
      
    }
  }

  render() {

    const { productInfo } = this.props;
    
    return (
      
      <div className="product_info">
        {
          this.switchElement(productInfo)
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
