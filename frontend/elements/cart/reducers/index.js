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
			return {
				...state, 
				// addedItems: JSON.parse(localStorage.getItem('addedItems')) || [],
				// total: JSON.parse(localStorage.getItem('total')) || 0,
			};
		case ADD_PRODUCT_TO_CART:
			if (!action.payload) {
				return state;
			} 

			//check if the name exists in the addedItems
			const existedItem = state.addedItems.find(addedItem => addedItem.name === action.payload.name)
			const total = Number(state.total) + Number(action.payload.price_override)
			localStorage.setItem('total', JSON.stringify(total))

			if (existedItem) {
				action.payload.quantity++
				localStorage.setItem('addedItems', JSON.stringify([action.payload]))
				return {
					...state,
					isProductAdded: true,
					addedItems: [action.payload],
					total: total
				}
			}

			action.payload.quantity = 1
			localStorage.setItem('addedItems', JSON.stringify([...state.addedItems, action.payload]))
			return {
				...state,
				addedItems: [...state.addedItems, action.payload],
				isProductAdded: true,
				total: total
			}

			case REMOVE_PRODUCT_FROM_CART:
				const newRemoveState = state.addedItems.filter(addedItem => {
					return addedItem.name != action.payload.name
				})
				localStorage.setItem('addedItems', JSON.stringify(newRemoveState));
				return {
					...state, addedItems: newRemoveState
				};

			case INCREASE_CART_ITEM:
				const newIncreaseState = state.addedItems.map(addedItem => {
					return addedItem.id == action.payload.id ? {
						...addedItem,
						quantity: action.payload.quantity + 1
					} : addedItem;
				})
				localStorage.setItem('total', JSON.stringify(Number(state.total) + Number(action.payload.price_override)))
				localStorage.setItem('addedItems', JSON.stringify(newIncreaseState))
				return {
					...state, 
					addedItems: newIncreaseState, 
					total: Number(state.total) + Number(action.payload.price_override)
				}

				case DECREASE_CART_ITEM:
					if (action.payload.quantity <= 1) {
						return state
					}
					const newDecreaseState = state.addedItems.map(addedItem => {
						return addedItem.id == action.payload.id ? {
							...addedItem,
							quantity: action.payload.quantity - 1
						} : addedItem;
					})
					localStorage.setItem('addedItems', JSON.stringify(newDecreaseState))
					localStorage.setItem('total', Number(state.total) - Number(action.payload.price_override))
					return {
						...state, 
						addedItems: newDecreaseState, 
						total: Number(state.total) - Number(action.payload.price_override)
					}

					case ADD_PRODUCT_TO_CART_RESET:
						return {
							...state, isProductAdded: false
						}
						default:
							return state;
	}
}