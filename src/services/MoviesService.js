import axios from "axios";
import config from '../config/config'

export default async page => {
    const response = await axios.get(`${config.DISCOVER_URL}?api_key=${config.API_KEY}&sort_by=popularity.desc`, {
        params: {
            page
        }
    });

    return response.data;
};