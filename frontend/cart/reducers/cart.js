import {
  ADD_PRODUCT_TO_CART,
  LOAD_CART,
  REMOVE_PRODUCT_FROM_CART,
  DECREASE_CART_ITEM,
} from '../constant';

const initialState = {
  cartItems: [],
  errors: '',
  fetching: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      // localStorage.clear();
      console.log(localStorage.getItem('cartProducts'));
      
      return {
        ...state,
        cartItems: JSON.parse(localStorage.getItem('cartProducts')) || []
      };
    case ADD_PRODUCT_TO_CART:

        const cartItem = {
          product: {},
          count: 1,
        }

        let instateProduct = state.cartItems.filter(cartItem => cartItem.product.name === action.payload.name)[0]

        if (instateProduct) {
          let newState = state.cartItems.map(cartItem => {
            let tmp = Object.assign({}, cartItem);
            if (tmp.product.name === action.payload.name) {
              tmp.product = action.payload
              tmp.count++
            }
            return tmp
          })

          localStorage.setItem('cartProducts', JSON.stringify(newState))
          return {
            ...state,
            cartItems: newState,
          }
        } 

        cartItem.product = action.payload
        localStorage.setItem('cartProducts', JSON.stringify([...state.cartItems, cartItem]))
        return {
          ...state,
          cartItems: [...state.cartItems, cartItem],
        }
      case REMOVE_PRODUCT_FROM_CART:
        localStorage.setItem('cartProducts', JSON.stringify(state.cartItems.filter(cartItem => cartItem.product.name != action.payload.name)));
        return {
          ...state,
          cartItems: state.cartItems.filter(cartItem => cartItem.product.name != action.payload.name),
        };
      case DECREASE_CART_ITEM:
        let newState = state.cartItems.map(cartItem => {
          if (cartItem.count == 1) return cartItem;
          let tmp = Object.assign({}, cartItem);
          if (tmp.product.name === action.payload.name) {
            tmp.product = action.payload
            tmp.count--
          }
          return tmp
        })
        localStorage.setItem('cartProducts', JSON.stringify(newState))
        return {
          ...state,
          cartItems: newState,
        }
      default:
        return state;
  }
}