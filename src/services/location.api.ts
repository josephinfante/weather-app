import axios from "axios";

const URL = import.meta.env.VITE_ENV === 'local' ? "https://corsproxyserve.herokuapp.com/https://ipinfo.io?token=" : "https://ipinfo.io?token="

export const getLocation = async () => {
    try {
        const res = await axios.get(`${URL}${import.meta.env.VITE_LOCATION_API}&format=json`);
        const { city } = res.data;
        return city;
    } catch (err) {
        console.log(err);
    }
}