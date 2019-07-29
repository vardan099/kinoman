import React from 'react';
import PropTypes from "prop-types";

const SearchInput = ({inputChangeCallback, submitCallback, inputValue}) => {
    return (
        <form className="container search-input mb-5" onSubmit={submitCallback} data-test="searchComponent">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for a movie" value={inputValue} onChange={inputChangeCallback}/>
                <div className="input-group-append">
                    <button className="btn btn-secondary search-button" type="submit">
                        <i className="fa fa-search" />
                    </button>
                </div>
            </div>
        </form>
    );
};

SearchInput.propTypes = {
    inputChangeCallback: PropTypes.func,
    submitCallback: PropTypes.func,
    inputValue: PropTypes.string,
};

export default SearchInput;