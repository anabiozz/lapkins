import {products} from './mockProducts';
import {variations} from './mockVariations';
import {categories} from './mockCategories';
import * as R from 'ramda';
import { cart } from './mockCart';
import { user } from './mockUser';

export const fetchCategories = () => {
  return new Promise(((resolve, reject) => {
    resolve(categories);
  }));
};

export const fetchVariations = () => {
  return new Promise(((resolve, reject) => {
    resolve(variations);
  }));
};

export const fetchProducts = () => {
  return new Promise(((resolve, reject) => {
    resolve(products);
  }));
};

export const fetchProduct = (sku) => {
  return new Promise((resolve, reject) => {
    const attrs = [];

    const variation = R.find(R.propEq('sku', Number(sku)), variations);
    const pv = R.filter(R.propEq('productId', variation.productId), variations);

    pv.forEach(variation => {
      variation.attributes.forEach(attr => {
        let obj = R.find(R.propEq('sku', variation.sku))(attrs);
        if (!obj || R.isEmpty(obj)) {
          let attribute = {};
          attribute.sku = variation.sku;
          attribute.value = [];
          attribute.value.push({name: attr.name, value: attr.value});
          attrs.push(attribute);
        } else {
          obj.value.push({name: attr.name, value: attr.value});
        }
      });
    });

    const product = R.find(R.propEq('id', variation.productId), products);

    resolve({
      info: product,
      variation: variation,
      attrs: attrs,
    });
  });
};

export const fetchCart = () => {
  return new Promise(((resolve, reject) => {
    resolve(cart);
  }));
};

export const login = (subject, password) => {
  return new Promise(((resolve, reject) => {
    user.subject = subject;
    user.password = password;
    resolve(user);
  }));
};

export const registration = (subject, password) => {
  return new Promise(((resolve, reject) => {
    user.subject = subject;
    user.password = password;
    resolve(user);
  }));
};

export const addToCart = (product) => {
  return new Promise(((resolve, reject) => {
    let cartProduct = R.find(R.propEq('id', product.variation.id), cart);
    console.log(product);
    if (cartProduct) {
      cartProduct.quantity += 1;
    } else {
      let newCartProduct = {
        id: product.variation.id,
        name: product.info.name,
        price: product.variation.price,
        size: '123',
        quantity: 1,
      };
      cart.push(newCartProduct);
    }
    console.log('cart', cart);
    resolve(cart);
  }));
};

export const increaseCartProductQty = (product) => {
  return new Promise(((resolve, reject) => {
    let cartProduct = R.find(R.propEq('id', product.id), cart);
    cartProduct.quantity += 1;
    resolve(cart);
  }));
};

export const decreaseCartProductQty = (product) => {
  return new Promise(((resolve, reject) => {
    let cartProduct = R.find(R.propEq('id', product.id), cart);
    cartProduct.quantity -= 1;
    resolve(cart);
  }));
};

export const removeCartProduct = (product) => {
  return new Promise(((resolve, reject) => {
   let newCart = R.reject(R.propEq('id', product.id), cart);
    resolve(newCart);
  }));
};


