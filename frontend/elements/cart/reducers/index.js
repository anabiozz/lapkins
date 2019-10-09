import {
  ADD_PRODUCT_TO_CART,
  LOAD_CART,
  REMOVE_PRODUCT_FROM_CART,
  DECREASE_CART_ITEM,
  ADD_PRODUCT_TO_CART_RESET,
  INCREASE_CART_ITEM
} from '../constant';

const initialState = {
  addedItems: [],
  errors: '',
  isProductAdded: false,
  fetching: false,
  total: 0,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      // localStorage.clear();
      return { ...state, addedItems: JSON.parse(localStorage.getItem('addedItems')) || [] };
    case ADD_PRODUCT_TO_CART:

        //check if the name exists in the addedItems
        const existedItem = state.addedItems.find(addedItem => addedItem.name === action.payload.name)

        if (existedItem) {
          action.payload.quantity++
          localStorage.setItem('addedItems', JSON.stringify([ action.payload ]))
          return {...state, isProductAdded: true, addedItems: [ action.payload ], total: Number(state.total) + Number(action.payload.price_override) }
        }

        action.payload.quantity = 1
        const newTotal = Number(state.total) + Number(action.payload.price_override)
        localStorage.setItem('addedItems', JSON.stringify([ ...state.addedItems, action.payload ]))
        return { ...state, addedItems: [ ...state.addedItems, action.payload ], isProductAdded: true,  total: newTotal }

      case REMOVE_PRODUCT_FROM_CART:
        const newRemoveState = state.addedItems.filter(addedItem => { return addedItem.name != action.payload.name })
        localStorage.setItem('addedItems', JSON.stringify( newRemoveState ));
        return { ...state, addedItems: newRemoveState };
          
      case INCREASE_CART_ITEM:
        const newIncreaseState = state.addedItems.map(addedItem => { 
          return addedItem.id == action.payload.id ? { ...addedItem, quantity: action.payload.quantity + 1 } : addedItem;
        })
        localStorage.setItem('addedItems', JSON.stringify( newIncreaseState ))
        return { ...state, addedItems: newIncreaseState, total: Number(state.total) + Number(action.payload.price_override) }

      case DECREASE_CART_ITEM:
        if (action.payload.quantity <= 1) {
          return { ...state }
        }
        const newDecreaseState = state.addedItems.map(addedItem => { 
          return addedItem.id == action.payload.id ? { ...addedItem, quantity: action.payload.quantity - 1 } : addedItem;
        })
        localStorage.setItem('addedItems', JSON.stringify( newDecreaseState ))
        return { ...state, addedItems: newDecreaseState, total: Number(state.total) - Number(action.payload.price_override) }

      case ADD_PRODUCT_TO_CART_RESET:
        return { ...state, isProductAdded: false }
      default:
        return state;
  }
}