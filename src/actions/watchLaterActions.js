import {ADD_TO_WATCH_LATER} from "../constants/action-types";

export const addToWatchLater = movie => ({
    type: ADD_TO_WATCH_LATER,
    movie
});
