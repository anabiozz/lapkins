import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export class Product extends Component {

  render() {

    const {product, url} = this.props;

    return (
      <div className='product'>
          <div className='image'>
            <div className='inner'>
              <Link to={`/postcards/${product.id}`}>
                <img src={url} alt=''/>
              </Link>
            </div>
          </div>
          <div className='prev_desc'>
            <div>{product.decription}</div>
            <div>{product.categories.authors}</div>
            <div>{product.price} руб.</div>
           
            
            {/* {
              Object.keys(this.props.product.categories).map((key, index) => {
                return  <div key={index}>{this.props.product.categories[key]}</div>
              })
            } */}
          </div>
      </div>
    )

  }
}

export default Product
