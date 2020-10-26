import React from 'react';
import ReactDOM from 'react-dom';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.css';
import './theme.css';


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
