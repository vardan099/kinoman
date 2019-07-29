import React from 'react';
import PropTypes from "prop-types";
import SharedLink from "../SharedLink/SharedLink"

const Header = ({homeCallBack, favoritesCallback, watchLaterCallback, activeSection}) => {

    return (
        <div data-test="headerComponent">
            <div className="nav-justified site-header">
                <a href="/" data-test="headerLogo">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/>
                </a>
            </div>
            <nav className="navbar navbar-expand navbar-dark bg-dark mb-5">
                <div className="container">
                    <div className="navbar-collapse collapse" id="navbar10">
                        <ul className="navbar-nav nav-fill w-100">
                            <li className="nav-item" data-test="headerLinks">
                                <SharedLink linkText={'Home'} emitEvent={homeCallBack} isActive={activeSection==='home'}/>
                            </li>
                            <li className="nav-item" data-test="headerLinks">
                                <SharedLink linkText={'Favorites'} emitEvent={favoritesCallback} isActive={activeSection==='favorites'}/>
                            </li>
                            <li className="nav-item" data-test="headerLinks">
                                <SharedLink linkText={'Watch later'} emitEvent={watchLaterCallback} isActive={activeSection==='watch-later'}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

Header.propTypes = {
    activeSection: PropTypes.string,
    homeCallBack: PropTypes.func,
    favoritesCallback: PropTypes.func,
    watchLaterCallback: PropTypes.func,
};

export default Header;