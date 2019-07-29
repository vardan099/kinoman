import reducer from '../reducers/favoriteReducer';
import {addToFavorites} from './favoriteActions';

const movie = {
    adult: false,
    backdrop_path: "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
    genre_ids: [12, 16, 10751, 18, 28],
    id: 420818,
    original_language: "en",
    original_title: "The Lion King",
    overview: "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny.",
    popularity: 502.676,
    poster_path: "/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
    release_date: "2019-07-12",
    title: "The Lion King",
    video: false,
    vote_average: 6.8,
    vote_count: 296
};

describe('post reducer', () => {
    let state;
    beforeEach(function () {
        state = {
            favoritesList: []
        }
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({favoritesList:[]});
    });

    it('should handle addFavorites action creator', () => {
        expect(reducer(state, addToFavorites(movie))).toEqual({favoritesList: [
                {...movie}
            ]});
    });
});
