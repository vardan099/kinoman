import axios from "axios";
import config from '../config/config'

export const getMovies =  async page => {
    return await axios.get(`${config.DISCOVER_URL}?api_key=${config.API_KEY}&sort_by=popularity.desc`, {
        params: {
            page
        }
    });
};

export const searchMovies =  async (page,query) => {
    return await axios.get(`${config.SEARCH_URL}?api_key=${config.API_KEY}`, {
        params: {
            page,
            query
        }
    });
};

export const getMovieTrailer =  async (videoId) => {
    return await axios.get(`${config.MOVIE_URL}/${videoId}/videos?api_key=${config.API_KEY}`, {});
};
