import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './LoginPage.css'
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <>
       <SearchBar
          searchPosts={this.searchPostsHandler}
        />
        <form className="login-form">
          <h2>Welcome to ReactAgram</h2>
          <h3>Please Login</h3>
            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleLogin}>Log In</button>
        </form>
      </>
    );
  }
}

export default Login;