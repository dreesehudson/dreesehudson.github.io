import React, { Component } from 'react';
//importing Components
import Header from './Components/Header.js'
import Portfolio from './Components/Portfolio.js'
import Blog from './Components/Blog.js'
import Footer from './Components/Footer.js'
//importing Content Data
import blogPosts from './Data/blogPostsData.js'
import projectData from './Data/projectData.js'
import calculator from './img/calculator.png'
import countdownTimer from './img/countdown-timer.png'
import digitalClock from './img/digital-clock.png'
import mindReader from './img/mind-reader.png'
import sam from './img/sam.png'
import ticTacToe from './img/tic-tac-toe.png'
import weatherApp from './img/weather-app.png'

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 0,
            blogPosts: []
        }
        this.blog =
        {
            "page": "Blog",
            "component": "",
            "icon": "<FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>",
            "data": blogPosts
        }
        this.projects =
        {
            "page": "Projects",
            "component": "",
            "icon": "<FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon>",
            "data": projectData
        }
        this.contact = [
            {
                "name": "david.reese.hudson@gmail.com",
                "path": "mailto:david.reese.hudson@gmail.com",
                "icon": "<FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>"
            },
            {
                "name": "GitHub",
                "path": "https://github.com/dreesehudson",
                "icon": "<FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>",
            },
            {
                "name": "LinkedIn",
                "path": "https://www.linkedin.com/in/dreesehudson/",
                "icon": "<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>",
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
            <>
                <div className="App container-fluid">
                    <Header />

                    {/* Body Content Projects */}
                    <Portfolio
                        projects={this.projects} />

                    {/* Body Content Blogs */}
                    <Blog
                        pages={this.blog} />

                {/* <p>{projectData[0].name}</p> */}
                    <Footer
                        contact={this.contact} />

                </div>
            </>
        )
    }
}

export default App