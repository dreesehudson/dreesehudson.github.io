import React, { Component } from 'react';
//importing Components
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        <div className="App container">
            <Header />

            <Footer />
        </div>
        )
    }
}

export default App