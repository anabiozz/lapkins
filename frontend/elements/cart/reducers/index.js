import {
	ADD_PRODUCT_REQUEST,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_ERROR,
	ADD_PRODUCT_RESET,
	INCREASE_PRODUCT_QUANTITY_REQUEST,
	INCREASE_PRODUCT_QUANTITY_SUCCESS,
	INCREASE_PRODUCT_QUANTITY_ERROR,
	LOAD_CART_REQUEST,
	LOAD_CART_SUCCESS,
	LOAD_CART_ERROR,
	REMOVE_PRODUCT_REQUEST,
	REMOVE_PRODUCT_ERROR,
	REMOVE_PRODUCT_SUCCESS,
	LOAD_CART_RESET,
	DECREASE_PRODUCT_QUANTITY_REQUEST,
	DECREASE_PRODUCT_QUANTITY_SUCCESS,
	DECREASE_PRODUCT_QUANTITY_ERROR,
} from '../constant';

const initialState = {
	items: [],
	// isProductAdded: false,
	errors: "",
	fetching: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_PRODUCT_REQUEST:
			return  { ...state, fetching: true };

		case ADD_PRODUCT_SUCCESS:
			return { ...state, fetching: false, items: [...state.items, action.response] };
			
		case ADD_PRODUCT_ERROR:
			return { ...state, errors: action.error, fetching: false };

		case ADD_PRODUCT_RESET:
			return { ...state, isProductAdded: false, items: [] };

		case INCREASE_PRODUCT_QUANTITY_REQUEST:
			return { ...state, fetching: true };
		
		case INCREASE_PRODUCT_QUANTITY_SUCCESS:
				const increasedState = state.items.map(product => {
					return product.variation_id === action.response.variationID
					&& product.size_option_id === action.response.sizeOptionID
					? { ...product, quantity: product.quantity + 1, price: product.price + product.price_per_item } : product;
				});
			return { ...state, items: increasedState, fetching: false };
			
		case INCREASE_PRODUCT_QUANTITY_ERROR:
			return { ...state, errors: action.error, fetching: false };

		case DECREASE_PRODUCT_QUANTITY_REQUEST:
			return { ...state, fetching: true };

		case DECREASE_PRODUCT_QUANTITY_SUCCESS:
			const decreasedState = state.items.map(product => {
				return product.variation_id === action.response.variationID
				&& product.size_option_id === action.response.sizeOptionID
					? { ...product, quantity: product.quantity - 1, price: product.price - product.price_per_item } : product;
			});
			return { ...state, items: decreasedState, fetching: false };

		case DECREASE_PRODUCT_QUANTITY_ERROR:
			return { ...state, errors: action.error, fetching: false };

		case REMOVE_PRODUCT_REQUEST:
			return { ...state, fetching: true };

		case REMOVE_PRODUCT_ERROR:
			return { ...state, errors: action.error, fetching: false };

		case REMOVE_PRODUCT_SUCCESS:
			const removedProductState = state.items.filter(product => {
				return product.variation_id !== action.response.variation_id && product.size_option_id !== action.response.size_option_id
			});
			return { ...state, fetching: false, items: removedProductState };

		case LOAD_CART_REQUEST:
			return  { ...state, fetching: true };

		case LOAD_CART_SUCCESS:
			return { ...state, fetching: false, items: action.response ? [...state.items, ...action.response] : [...state.items]};

		case LOAD_CART_RESET:
			return  { ...state, fetching: false, items: [] };

		case LOAD_CART_ERROR:
			return { ...state, errors: action.error, fetching: false };

		default:
			return state;
	}
}