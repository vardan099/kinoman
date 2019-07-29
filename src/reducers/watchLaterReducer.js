import {ADD_TO_WATCH_LATER} from "../constants/action-types";

let initialState = {
    watchLaterList: []
};

const watchLaterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WATCH_LATER:
            const index = state.watchLaterList.findIndex((e) => e.id === action.movie.id);
            if (index === -1) {
                return {
                    ...state,
                    watchLaterList: [...state.watchLaterList, action.movie]
                };
            }
            break;
        default:
            return state;
    }
};

export default watchLaterReducer;