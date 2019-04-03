import {
  ADD_PRODUCT_TO_CART,
  LOAD_CART,
  REMOVE_PRODUCT_FROM_CART,
} from '../constant';

const initialState = {
  products: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT_TO_CART:
      console.log("lol");
      return {
        ...state,
        productToAdd: Object.assign({}, action.payload)
      }
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        productToRemove: Object.assign({}, action.payload)
      };
    default:
      return state;
  }
}