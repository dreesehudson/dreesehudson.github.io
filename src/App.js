import React, { Component } from 'react';
//importing Components
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
//importing Content Data
//import blogPosts from './Data/blog_posts.js'

class App extends Component {
    constructor() {
        super();
        this.state = {

        }

        this.pages = [
            {
                "page": "Blog",
                "path": "/index.html",
                "icon": "fas fa-angle-double-right"
                // 'data': blogPosts
            },
            {
                "page": "Projects",
                "path": "/pages/projects.html",
                "icon": "fas fa-project-diagram",
                // 'data': ''
            }]

        this.contact = [
            {
                "name": "david.reese.hudson@gmail.com",
                "path": "mailto:david.reese.hudson@gmail.com",
                "icon": "fas fa-paper-plane"
                // 'data': blogPosts
            },
            {
                "name": "GitHub",
                "path": "https://github.com/dreesehudson",
                "icon": "fas fa-code-branch",
                // 'data': ''
            },
            {
                "name": "LinkedIn",
                "path": "https://www.linkedin.com/in/dreesehudson/",
                "icon": "fab fa-linkedin",
                // 'data': ''
            }
        ]
    }

    render() {
        return (
            <div className="App container-fluid">
                <Header pages={this.pages} />
                <Footer contact={this.contact} />
            </div>
        )
    }
}

export default App