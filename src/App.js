import React, { Component } from 'react';
//importing Components
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
//importing Content Data
//import blogPosts from './Data/blog_posts.js'

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 0,
            blogPosts: []
        }
        this.pages = [
            {
                "page": "Blog",
                "path": "/index.html",
                "icon": "faAngleDoubleRight"
                // 'data': blogPosts
            },
            {
                "page": "Projects",
                "path": "/pages/projects.html",
                "icon": "faProjectDiagram",
                // 'data': ''
            }]
        this.contact = [
            {
                "name": "david.reese.hudson@gmail.com",
                "path": "mailto:david.reese.hudson@gmail.com",
                "icon": "faPaperPlane"
                // 'data': blogPosts
            },
            {
                "name": "GitHub",
                "path": "https://github.com/dreesehudson",
                "icon": "faCodeBranch",
                // 'data': ''
            },
            {
                "name": "LinkedIn",
                "path": "https://www.linkedin.com/in/dreesehudson/",
                "icon": "faLinkedin",
                // 'data': ''
            }
        ]
        this.setPage = this.setPage.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    setPage(address) {
        this.setState({ currentPage: address })
    }

    render() {
        return (
            <div className="App container-fluid">
                <Header
                    pages={this.pages}
                    currentPage={this.state.currentPage}
                    setPage={this.setPage} />
                <Footer contact={this.contact} />
            </div>
        )
    }
}

export default App