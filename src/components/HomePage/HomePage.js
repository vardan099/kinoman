import React, {Component} from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import ReactPaginate from 'react-paginate';
import {connect} from "react-redux";
import axios from 'axios/index';
import MoviesWrapper from '../MoviesWrapper/MoviesWrapper';
import Header from '../Header/Header';
import SearchInput from '../SearchInput/SearchInput';
import config from '../../config/config'
import Loader from 'react-loader-spinner'
import NoResults from '../../components/NoResults/NoResults'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import * as favoriteActions from "../../actions/favoriteActions";
import * as watchLaterActions from "../../actions/watchLaterActions";
import SweetAlert from 'react-bootstrap-sweetalert';


class HomePage extends Component {

    constructor(props) {
        super(props);

        this._isMounted = false;

        this.state = {
            movies: [],
            query: '',
            total_pages: 0,
            loading: true,
            isHome: true,
            isModalOpen: false,
            videoKey: '',
            showAlert: false,
            alertType: 'default',
            alertText: '',
            activeSection: 'home',
        };
    }

    loadMoviesFromServer(page) {
        axios.get(`${config.DISCOVER_URL}?api_key=${config.API_KEY}&sort_by=popularity.desc&page=${page}`).then((response) => {
            const movies = response.data.results;
            const total_pages = response.data.total_pages > 1000 ? 1000 : response.data.total_pages;
            this.setState({
                movies,
                total_pages,
                loading: false,
                isHome: true,
                query: '',
                activeSection: 'home'
            })
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    searchMoviesFromServer(page, query) {
        if (query !== "") {
            axios.get(`${config.SEARCH_URL}?api_key=${config.API_KEY}&query=${query}&page=${page}`).then((response) => {
                const movies = response.data.results;
                const total_pages = response.data.total_pages > 1000 ? 1000 : response.data.total_pages;
                this.setState({
                    movies,
                    total_pages,
                    loading: false,
                    isHome: true
                })
            }).catch(function (error) {
                // handle error
                console.log(error);
            })
        }
    }

    getMovieTrailerFromServer(videoId) {
        axios.get(`${config.MOVIE_URL}/${videoId}/videos?api_key=${config.API_KEY}`).then((response) => {
            const results = response.data.results;
            if (results.length > 0) {
                const videoKey = results[0].key;
                this.setState({
                    videoKey,
                })
            }
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    componentDidMount() {
        this._isMounted = true;
        this.loadMoviesFromServer(1);
    }

    handlePageClick = data => {
        let selected = data.selected;
        const {query} = this.state;
        if (query.length > 0) {
            this.searchMoviesFromServer(selected + 1, query)
        } else {
            this.loadMoviesFromServer(selected + 1)
        }
    };

    watchLater = movie => {
        const {watchLaterActions} = this.props;
        watchLaterActions.addToWatchLater(movie);
        this.showAlert('success', 'The movie added to the watch later list')
    };

    addToFavorites = movie => {
        const {favoriteActions} = this.props;
        favoriteActions.addToFavorites(movie);
        this.showAlert('success', 'The movie added to the favorite list')
    };

    watchTrailer = movie => {
        this.getMovieTrailerFromServer(movie.id);
        this.openModal();
    };

    showHome = () => {
        this.loadMoviesFromServer(1);
    };

    showFavorites = () => {
        const {favoritesList} = this.props;
        this.setState({
            movies: favoritesList,
            isHome: false,
            query: '',
            activeSection: 'favorites'
        });
    };

    showAlert = (alertType, alertText) => {
        this.setState({
            showAlert: true,
            alertType,
            alertText
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false,
            alertType: 'default',
            alertText: ''
        });
    };

    openModal = () => {
        this.setState({
            isModalOpen: true
        });
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
            videoKey: ''
        });
    };

    showWatchLater = () => {
        const {watchLaterList} = this.props;
        this.setState({
            movies: watchLaterList,
            isHome: false,
            query: '',
            activeSection: 'watch-later'
        });
    };

    handleSearchInputChange = (event) => {
        const query = event.target.value;
        this.setState({query});
    };

    handleSearchSubmit = (event) => {
        event.preventDefault();
        const {query} = this.state;
        if (query.length > 0) {
            this.searchMoviesFromServer(1, query)
        } else {
            this.loadMoviesFromServer(1)
        }
    };

    componentWillUnmount() {
        this._isMounted = false;
    }


    render() {
        const {movies, total_pages, loading, isHome, query, isModalOpen, videoKey, showAlert, alertType, alertText, activeSection} = this.state;
        return (
            <div data-test="homePageComponent">

                <Header
                    activeSection={activeSection}
                    homeCallBack={this.showHome}
                    favoritesCallback={this.showFavorites}
                    watchLaterCallback={this.showWatchLater}
                />

                <div className="container-fluid">
                    {
                        isHome &&
                        <SearchInput
                            inputChangeCallback={this.handleSearchInputChange}
                            submitCallback={this.handleSearchSubmit}
                            inputValue={query}
                        />
                    }
                    {
                        loading ?
                            <Loader
                                type="Oval"
                                color="#00BFFF"
                                height="100"
                                width="100"
                            /> :
                            <div>
                                {
                                    movies.length > 0 ?
                                        <div>
                                            <MoviesWrapper
                                                movies={movies}
                                                watchTrailerCallback={this.watchTrailer}
                                                addToWatchLaterCallback={this.watchLater}
                                                addToFavoritesCallback={this.addToFavorites}
                                                showAlertCallback={this.showAlert}
                                            />
                                            {
                                                isHome && <ReactPaginate
                                                    previousLabel={'prev'}
                                                    nextLabel={'next'}
                                                    breakLabel={'...'}
                                                    breakClassName={'break-me'}
                                                    pageCount={total_pages}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={5}
                                                    onPageChange={this.handlePageClick}
                                                    containerClassName={'pagination justify-content-center'}
                                                    activeClassName={'active'}
                                                    nextLinkClassName={'page-link'}
                                                    previousLinkClassName={'page-link'}
                                                    pageLinkClassName={'page-link'}
                                                />
                                            }
                                        </div>
                                        : <NoResults/>
                                }
                            </div>
                    }
                </div>
                <ModalWrapper
                    isOpen={isModalOpen}
                    closeCallback={this.closeModal}
                    videoKey={videoKey}
                />
                <SweetAlert
                    show={showAlert}
                    type={alertType}
                    title={alertText}
                    onConfirm={this.hideAlert}
                />

            </div>
        );
    }
}

HomePage.propTypes = {
    favoritesList:PropTypes.array,
    watchLaterList:PropTypes.array
};

const mapStateToProps = state => {
    return {
        favoritesList: state.favorites.favoritesList,
        watchLaterList: state.watchLater.watchLaterList,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        favoriteActions: bindActionCreators(favoriteActions, dispatch),
        watchLaterActions: bindActionCreators(watchLaterActions, dispatch),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);