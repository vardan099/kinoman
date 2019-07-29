import {combineReducers} from 'redux';
import favoritesReducer from './favoriteReducer';
import watchLaterReducer from './watchLaterReducer';

export default combineReducers({
    favorites: favoritesReducer,
    watchLater: watchLaterReducer,
});