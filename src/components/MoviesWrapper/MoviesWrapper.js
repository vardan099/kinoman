import React from 'react';
import Movie from './Movie'
import PropTypes from "prop-types";

const MoviesWrapper = (props) => {
    const {movies, addToWatchLaterCallback, watchTrailerCallback, addToFavoritesCallback,showAlertCallback} = props;
    return (
        <main className="container-fluid">
            <section className="movies" id="movies">
                <div className="row">
                    {movies && movies.map((movie, index) =>
                        <Movie
                            key={index}
                            movie={movie}
                            index={index}
                            watchTrailerCallback={watchTrailerCallback}
                            addToWatchLaterCallback={addToWatchLaterCallback}
                            addToFavoritesCallback={addToFavoritesCallback}
                            showAlertCallback={showAlertCallback}
                        />
                    )}
                </div>
            </section>
        </main>
    );
};

MoviesWrapper.propTypes = {
    movies: PropTypes.array,
    addToWatchLaterCallback: PropTypes.func,
    watchTrailerCallback: PropTypes.func,
    addToFavoritesCallback: PropTypes.func,
};

export default MoviesWrapper;