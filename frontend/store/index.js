// import React, {createContext, useReducer} from 'react';
// import PropTypes from 'prop-types';
//
// export const initialState = {
//   cart: {
//     products: [],
//     error: null,
//     fetching: false,
//   },
//   categories: {
//     products: [],
//     error: null,
//     fetching: false,
//   },
//   catalog: {
//     products: [],
//     error: null,
//     fetching: false,
//   },
//   description: {
//     product: {},
//     error: null,
//     fetching: false,
//   },
//   headerCartInfo: {
//     quantity: 0,
//     price: 0
//   },
//   user: {
//     name: 'Unknown',
//     token: '',
//     error: null,
//     fetching: false,
//     isLoggedIn: false,
//   },
// };
//
// const actions = {
//   SET_CART_INFO: 'SET_CART_INFO',
//   RESET_CART_INFO: 'RESET_CART_INFO',
//   SET_USER: 'SET_USER',
//   RESET_USER: 'RESET_USER',
// };
//
// function reducer(state, action) {
//   switch (action.type) {
//     case actions.SET_CART_INFO:
//       return { ...state, headerCartInfo: action.value };
//     case actions.RESET_CART_INFO:
//       return { ...state, ...initialState.headerCartInfo };
//     case actions.SET_USER:
//       return { ...state, user: {isLoggedIn: action.value} };
//     case actions.RESET_USER:
//       return { ...state, ...initialState };
//     default:
//       return state;
//   }
// }
//
// const store = createContext(initialState);
// const { Provider } = store;
//
// const StateProvider = ( { children } ) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//
//   StateProvider.propTypes = {
//     children: PropTypes.object,
//   };
//   return <Provider value={{ state, dispatch }}>{children}</Provider>;
// };
//
// export { store, StateProvider };