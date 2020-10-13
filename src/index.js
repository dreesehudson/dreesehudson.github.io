import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/Header.js';
import './Components/Footer.js';
import './Components/Post.js';
import './Javascript/posts.json';

// //render Header Component
// <Header />

// //render posts Components


// //render footer Component
// <Footer />

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App container" >
        <Header
          pages={this.pages}
        />
      </div>
    )
  }
}

export default App;

ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
