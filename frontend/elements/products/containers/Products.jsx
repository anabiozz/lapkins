import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../components/Product.jsx';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import * as actions from '../actions';
import config from '../../../config';
import Loader from '../../common/components/Loader';

import {
  productProp,
} from '../../../utils/props';

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  static fetching ({ dispatch, path }) {
    return [dispatch(actions.getProducts(config.productTypes[path.substr(2)]))];
  }

  componentWillReceiveProps(nextProps) {
    const { getProducts, match } = nextProps;
    if (match.url !== this.props.match.url) {
      getProducts(config.productTypes[match.params.categoryType])
    }
  }

  componentDidMount() {
    const { getProducts, match } = this.props
    getProducts(config.productTypes[match.params.categoryType])
  }

  render() {
    const { items, errors, fetching, match } = this.props

    console.log('RENDER <Products>')

    console.log(items);

    return (
      <div className="products__catalog">
        <section className="search_content">
          <div className="search_wrapper">
            <Breadcrumbs />
          </div>
        </section>
        {/* <div className="catalog">
          <ul className="cat-nav dt102_1">
            <li className="cat-nav-item dt102_li1">
                <span className="cat-nav-item_li ">
                  <a className="link dt102_bold">Женщинам</a> 
                  <span className="cat-nav-cnt">226</span>
                </span>  
                <ul className="cat-nav cat-nav-sub dt102_2">
                  <li className="cat-nav-item dt102_li2"> 
                    <span className="cat-nav-item_li"> 
                      <a className="link">Обувь</a> 
                      <span className="cat-nav-cnt">107</span> 
                    </span>  
                  </li>
                  <li className="cat-nav-item dt102_li2"> 
                    <span className="cat-nav-item_li"> 
                      <a className="link">Одежда</a> 
                      <span className="cat-nav-cnt">75</span> 
                    </span>  
                  </li>
                  <li className="cat-nav-item dt102_li2"> 
                    <span className="cat-nav-item_li"> 
                      <a className="link" >Аксессуары</a> 
                     <span className="cat-nav-cnt">44</span> 
                    </span>  
                  </li>
                  <li className="cat-nav-item dt102_li2"> 
                    <span className="cat-nav-item_li"> 
                      <a className="link" >Спорт</a> 
                      <span className="cat-nav-cnt">11</span> 
                    </span>  
                  </li>
                </ul>  
            </li>
          </ul>
        </div> */}
        <div className="products">
          {
            fetching && <Loader />
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
            items && items.length === 0 && "Данная категория товара на данный момент отсутствует."
          }
          {
            items.map(product => (
              <Product
                key={product.id} 
                imgUrl={`${config.imagePath.dev_path_preview}${product.name}/${product.size}/1_thumb.jpg`} 
                product={product}
                productType={"/" + match.params.category+ "/" +match.params.categoryType} />
            ))
          }
        </div>
      </div>
    )
  }
}

Products.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(productProp).isRequired).isRequired,
  errors: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  items: state.products.items,
  errors: state.products.errors,
  fetching: state.products.fetching,
})

export default connect(mapStateToProps, { ...actions })(Products);