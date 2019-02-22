import React from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import LoginPage from './components/LoginPage/LoginPage';
import Authenticate from './components/Authentication/Authenticate';

const App = () => {
    return (
      <>
        <PostPage />
      </>
    );
}

export default Authenticate(App)(LoginPage);
