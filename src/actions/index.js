import axios from 'axios';
const API_KEY = 'f6cff2059d6bb669fa9683408e66b7ca';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return{
        type:FETCH_WEATHER,
        payload:request
    };
}