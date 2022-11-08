import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);

    if(!token) {
        throw new Error('Не задан ключ API, задайте кго через команду -t [API_KEY]');
    }

    const {data} = await axios.get('https://api.weatherapi.com/v1/current.json', {
        params: {
            q: city,
            key: token,
            lang: 'ru'
        }
    });

    return data;
};

export {getWeather};