import React from 'react';
import PropTypes from 'prop-types';

const SharedLink = ({linkText, isActive, emitEvent}) => {
    return (
        <a data-test="linkComponent" className={isActive ? "nav-link active" : "nav-link"}
           href={`#/${linkText}`} onClick={emitEvent}>
            {linkText}
        </a>
    );
};

SharedLink.propTypes = {
    isActive: PropTypes.bool,
    linkText: PropTypes.string,
    emitEvent: PropTypes.func
};

export default SharedLink;