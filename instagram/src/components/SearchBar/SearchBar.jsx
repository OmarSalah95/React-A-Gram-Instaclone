import React from 'react';
import Logo from '../../logo.svg';
import styled from 'styled-components'
import './SearchBar.css';

const Header = styled.div `
    border-bottom: 1px solid #61DAFB;
    height: 80px;
    line-height: 70px;
    display: flex;
    justify-content: space-between;

`

const SearchBar = props => {
  return (
    <header>
      <Header>
        <img alt="instagram logo" src={Logo} className="logo-image" />
        <h1>ReactAgram</h1>
        <div>
          <input type="text" placeholder="Search" onChange={props.searchPosts} />
        </div>
      </Header>
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
  </header>
  );
};

export default SearchBar;