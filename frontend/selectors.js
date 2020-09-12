import * as R from 'ramda';

export const getProducts = (state, ownProps) => {
  const result = [];
  let info = {
    id: 0,
    name: '',
    thumbnail: '',
    price: 0,
  };

  const category = getCurrentCategory(ownProps);
  const subcategory = getCurrentSubCategory(ownProps);

  const filteredProducts = R.filter(R.propEq('category', category), state.products.data);

  filteredProducts.forEach((product) => {

      let variation = R.filter(R.allPass([
        R.propEq('default', true),
        R.propEq('productId', product.id),
        subcategory ? R.propEq('name', subcategory) : function () {return true;}
      ]), state.variations.data)[0];

      if(variation) {
        info = {};
        info.id = variation.id;
        info.name = product.name;
        info.thumbnail = variation.thumbnail;
        info.price = variation.price;
        result.push(info);
      }
  });
  return result;
};

const getCurrentSKU = ownProps => R.path(['match', 'params', 'sku'], ownProps);

const getCurrentCategory = ownProps => R.path(['match', 'params', 'category'], ownProps);
const getCurrentSubCategory = ownProps => R.path(['match', 'params', 'subcategory'], ownProps);

export const getProductById = (state, id) => R.prop(id, state.products.data);

export const getTotalCartProductQty = state => {
  let newArray = R.pluck('quantity', state.cart.data);
  if (Array.isArray(newArray) && newArray.length) {
    return R.sum(newArray);
  }
  return 0;
};

export const getTotalCartProductPrice = state => {
  let newArray = R.map(obj => R.prop('quantity', obj) * R.prop('price', obj), state.cart.data);
  if (Array.isArray(newArray) && newArray.length) {
    return R.sum(newArray);
  }
  return 0;
};