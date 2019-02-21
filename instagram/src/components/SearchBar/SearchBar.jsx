import React from 'react';
import Logo from '../../logo.svg';

import './SearchBar.css';

const SearchBar = () => {
  return (
    <>
    <div className="search-bar">
        <img alt="instagram logo" src={Logo} className="logo-image" />
      <h1>ReactAgram</h1>
      <div>
        <input type="text" placeholder="Search" />
      </div>
    </div>
    <div className="social-wrapper">
        <div className="social">
          <i className="fa fa-compass" />
        </div>
        <div className="social">
          <i className="fa fa-heart" />
        </div>
        <div className="social">
          <i className="fa fa-user-circle" />
        </div>
      </div>
  </>
  );
};

export default SearchBar;