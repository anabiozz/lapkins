import {
	ADD_ITEM_TO_CART_REQUEST,
	ADD_ITEM_TO_CART_SUCCESS,
	ADD_ITEM_TO_CART_ERROR,
	REMOVE_PRODUCT_FROM_CART,
	DECREASE_CART_ITEM,
	ADD_ITEM_TO_CART_RESET,
	INCREASE_CART_ITEM_REQUEST,
	INCREASE_CART_ITEM_SUCCESS,
	INCREASE_CART_ITEM_ERROR,
} from '../constant';

const initialState = {
	items: [],
	isProductAdded: false,
	total: 0,
	errors: "",
	fetching: false,
	cartSession: ""
}

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_ITEM_TO_CART_REQUEST:
			return  { ...state, fetching: true }

		case ADD_ITEM_TO_CART_SUCCESS:
			return { ...state, fetching: false, cartSession: action.response }
			
		case ADD_ITEM_TO_CART_ERROR:
			return { ...state, errors: action.error, fetching: false }

		case INCREASE_CART_ITEM_REQUEST:
			return { ...state, fetching: true }
		
		case INCREASE_CART_ITEM_SUCCESS:
			return { ...state, fetching: false }
			
		case INCREASE_CART_ITEM_ERROR:
			return { ...state, errors: action.error, fetching: false }

		case REMOVE_PRODUCT_FROM_CART:
			const newRemoveState = state.items.filter(addedItem => {
				return addedItem.name != action.payload.name
			})
			return {
				...state, items: newRemoveState
			};

		case DECREASE_CART_ITEM:
			if (action.payload.quantity <= 1) {
				return state
			}
			const newDecreaseState = state.items.map(addedItem => {
				return addedItem.id == action.payload.id ? {
					...addedItem,
					quantity: action.payload.quantity - 1
				} : addedItem;
			})
			return {
				...state, 
				items: newDecreaseState, 
				total: Number(state.total) - Number(action.payload.price_override)
			}

		case ADD_ITEM_TO_CART_RESET:
			return { ...state, isProductAdded: false, cartSession: "" }
			default:
				return state;
	}
}