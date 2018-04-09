import { FETCH_WEATHER } from '../actions';

const weatherReducer = (state=[], action) => {
	switch(action.type) {
		case FETCH_WEATHER:
			// console.log(action.payload);
			console.log(state);
			return [...state, action.payload];

		default:
			return state;
	}
}

export default weatherReducer;
