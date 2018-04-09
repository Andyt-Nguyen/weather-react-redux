import { FETCH_WEATHER } from './types';
import { API_KEY } from '../config';

export const fetchWeather = term => {
	const url = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}&q=${term},us`;

	return dispatch =>
		fetch(url).then(res => res.json())
							.then(data => dispatch({type:FETCH_WEATHER, payload:data}));
}
