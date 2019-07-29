import {ADD_TO_FAVORITES} from "../constants/action-types";

export const addToFavorites = movie => ({
    type: ADD_TO_FAVORITES,
    movie
});
