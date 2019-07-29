import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux'
import Img from 'react-image'
import Loader from 'react-loader-spinner'
import config from '../../config/config'

const Movie = (props) => {
    const {movie, index, addToWatchLaterCallback, watchTrailerCallback, addToFavoritesCallback, showAlertCallback} = props;
    const favorites = useSelector(state => state.favorites);
    const watchLater = useSelector(state => state.watchLater);
    const imagePath = movie.poster_path ? `${config.IMAGE_URL}/${movie.poster_path}` : `${process.env.PUBLIC_URL}/noposter.png`;


    const addToFavorites = (movie) => {
        const index = favorites.favoritesList.findIndex((e) => e.id === movie.id);
        if (index === -1) {
            addToFavoritesCallback(movie)
        } else {
            showAlertCallback('info', 'The movie already exist in favorite list')
        }
    };

    const addToWatchLater = (movie) => {
        const index = watchLater.watchLaterList.findIndex((e) => e.id === movie.id);
        if (index === -1) {
            addToWatchLaterCallback(movie)
        } else {
            showAlertCallback('info', 'The movie already exist in watch latter list')
        }
    };
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 movie" key={index} data-test="movieComponent">
            <div className="card" key={index}>
                <div className="grid">
                    <figure className="effect-sarah">
                        <Img
                            src={imagePath}
                            loader={<Loader
                                type="Oval"
                                color="#00BFFF"
                                height="50"
                                width="50"
                            />}
                        />
                        <figcaption>
                            <h2>{movie.original_title}</h2>
                            <p>
                                {movie.overview}
                            </p>
                            <p>
                                <i className="fa fa-fw fa-play display-4 pointer" onClick={() => {
                                    watchTrailerCallback(movie)
                                }}/>
                                <i className="fa fa-fw fa-star-o display-4 pointer" onClick={() => {
                                    addToFavorites(movie)
                                }}/>
                                <i className="fa fa-fw fa-clock-o display-4 pointer" onClick={() => {
                                    addToWatchLater(movie)
                                }}/>
                            </p>
                        </figcaption>
                    </figure>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 metadata">
                                <p><i className="fa fa-star orange-star" aria-hidden="true"/> {movie.vote_average}/10
                                </p>
                            </div>
                            <div
                                className="col-8 metadata">{`Lang: ${movie.original_language}   Release: ${movie.release_date}`}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Movie.propTypes = {
    movie: PropTypes.object,
    index: PropTypes.number,
    watchTrailerCallback: PropTypes.func,
    addToWatchLaterCallback: PropTypes.func,
    addToFavoritesCallback: PropTypes.func,
    showAlertCallback: PropTypes.func,
};

export default Movie;