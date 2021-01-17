import * as R from 'ramda';
import fetch from 'isomorphic-fetch';

import {categories} from './mockCategories';
import { cart } from './mockCart';
import { user } from './mockUser';
import { products } from './mockProducts';
import { product } from './mockProduct';
import { variations } from './mockVariations';
import { superordinates } from './mockSuperordinateCategories';
import config from '../config';


export const fetchCategories = () => {
  return new Promise(((resolve, reject) => {
    resolve(categories);
  }));
};

export const fetchSuperordinateCategories = (superordinate) => {
  return new Promise(((resolve, reject) => {
    resolve(R.filter(R.propEq('category', superordinate))(superordinates));
  }));
};

export const fetchProductsByCategory = (basicCategory) => {
  console.log(basicCategory);
  return new Promise(((resolve, reject) => {
    let prod = R.filter(R.propEq('basicCategory', basicCategory))(products);
    resolve(prod);
  }));
  // return fetch(`${config.apiDomain}/api/v1/products`)
  // .then((response) => {
  //   if (!response.ok) {
  //     throw new Error('Could not fetch product product');
  //   }
  //   return response;
  // })
  // .then(response => response.json())
  // .catch(error => error);
};

export const fetchProduct = async (sku) => {
  return new Promise(((resolve, reject) => {
    resolve({
      variation: R.find(R.propEq('sku', Number(sku)))(variations),
      variations: variations,
      product: product,
    });
  }));
  // return fetch(`${config.apiDomain}/api/v1/product?sku=${sku}`)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error('Could not fetch product product');
  //     }
  //     return response;
  //   })
  //   .then(response => response.json())
  //   .catch(error => error);
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

export const order = (personInfo, cart) => {
  return new Promise(((resolve, reject) => {
    console.log('personInfo', personInfo);
    console.log('cart', cart);
    resolve(true);
  }));
};

