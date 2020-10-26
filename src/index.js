import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './theme.css';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from './App.js';


ReactDOM.render(
  // //render Header Component

  // //render posts Components


  // //render footer Component
  // <Footer />
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
