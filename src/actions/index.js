import axios from 'axios';

const API_KEY = '90c7f1beef31f9010699a0ee0ec23cfa';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	//axios is for ajax requests

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
