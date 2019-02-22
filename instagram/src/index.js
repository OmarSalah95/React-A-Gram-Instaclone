import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


const formatPhoneNumber = numArray => {
    console.log( "(" + numArray[0-2].join(',') + ") " +numArray[3-5].join(',') + "-" + numArray[6-9].join(',') )
  }
  
  formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])