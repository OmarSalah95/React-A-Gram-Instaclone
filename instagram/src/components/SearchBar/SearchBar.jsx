import React from 'react';
import Logo from '../../logo.svg';

import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
        <img alt="instagram logo" src={Logo} className="logo-image" />
      <div>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBar;