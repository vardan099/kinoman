import React from 'react';
import {shallow} from 'enzyme';
import MoviesWrapper from "./MoviesWrapper";

describe("MovieWrapper component", () => {
    const movies = [
        {
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
        }
    ];

    test("renders", () => {
        const wrapper = shallow(
            <MoviesWrapper
                movies={movies}
                watchTrailerCallback={jest.fn()}
                addTowatchLaterCallback={jest.fn()}
                addToFavoritesCallback={jest.fn()}
                showAlertCallback={jest.fn()}
            />);

        expect(wrapper.exists()).toBe(true);
    });

    // test("MoviesWrapper to mount without errors", () => {
    //     const comp = mount(
    //         <MoviesWrapper
    //             movies={movies}
    //             watchTrailerCallback={jest.fn()}
    //             addToWatchLaterCallback={jest.fn()}
    //             addToFavoritesCallback={jest.fn()}
    //             showAlertCallback={jest.fn()}
    //         />);
    //     expect(comp).toBeTruthy();
    // });

    it('Returns no movies when store is empty', () => {
        const wrapper = shallow(
            <MoviesWrapper
                movies={[]}
                watchTrailerCallback={jest.fn()}
                addTowatchLaterCallback={jest.fn()}
                addToFavoritesCallback={jest.fn()}
                showAlertCallback={jest.fn()}
            />);
        expect(wrapper.find('.movie').length).toBe(0);
    });
});