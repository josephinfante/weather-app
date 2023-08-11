import axios from "axios"

export const getWeather = async (location: string) => {
    try {
        const result = axios.get(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API}&q=${location}&aqi=no`).then((response) => response.data)
        return result
    } catch (error) {
        console.error(error)
    }
}

export const getForecast = async (location: string) => {
    try {
        const result = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API}&q=${location}&days=8&aqi=no&alerts=no`).then((response) => response.data);
        return result
    } catch (error) {
        console.error(error)
    }
}