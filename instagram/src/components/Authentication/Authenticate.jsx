import React from 'react';

const Authenticate = App => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
        if(localStorage.getItem('user')){ 
            this.setState({ loggedIn: !this.state.loggedIn })
        }
        
    }

    render() {
      return (
        this.state.loggedIn
            ? <App />
            : <LoginPage />
        )
    }
  };

export default Authenticate;