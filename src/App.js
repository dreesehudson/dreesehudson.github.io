import React, { Component } from 'react';
//importing Components
import Header from './Components/Header.js'
//import Blog_Post from './Components/Post.js'
import Footer from './Components/Footer.js'
//import Posts from './Javascript/posts.json'

class App extends Component {
    constructor() {
        super();
        this.state = {
            // posts: {JSON.parse(Posts)}
        }
            
        
    }

    render() {
        return (
        <div className="App container-fluid">
            <Header />
            {/* <Blog_Post posts="this.state.posts"/> */}
            <Footer />
        </div>
        )
    }
}

export default App