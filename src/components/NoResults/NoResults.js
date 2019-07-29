import React from 'react';
import Img from 'react-image'
import Loader from 'react-loader-spinner'

const NoResults = () => {
    return (
        <div className="container" data-test="noResultsComponent">
            <Img
                src={process.env.PUBLIC_URL + '/no-results.gif'}
                loader={<Loader
                    type="Oval"
                    color="#00BFFF"
                    height="50"
                    width="50"
                />}
            />
            <h1>No results found</h1>
        </div>
    );
};

export default NoResults;