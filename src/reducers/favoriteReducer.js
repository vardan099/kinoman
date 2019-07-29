import {ADD_TO_FAVORITES} from "../constants/action-types";

let initialState = {
    favoritesList: []
};

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            const index = state.favoritesList.findIndex((e) => e.id === action.movie.id);
            if (index === -1) {
                return {
                    ...state,
                    favoritesList: [...state.favoritesList, action.movie]
                };
            }
            break;
        default:
            return state;
    }
};

export default favoriteReducer;