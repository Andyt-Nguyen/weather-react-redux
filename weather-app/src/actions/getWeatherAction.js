import { FETCH_WEATHER } from './types';
import { API_KEY } from '../config';

export const fetchWeather = term => {
	const url = `http://openweathermap.org/data/2.5/forecast?q=${term},us&mode=json&appid=${API_KEY}`;

	// const promise = fetch(url).then(res => res.json()).then(data => console.log(data));

	return {
		type: FETCH_WEATHER,
		payload: 'kkdf'
	}
}
