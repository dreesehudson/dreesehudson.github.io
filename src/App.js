import React, { Component } from 'react';
//importing Components
import Header from './Components/Header.js'
import Portfolio from './Components/Portfolio.js'
import Blog from './Components/Blog.js'
import Footer from './Components/Footer.js'
//importing Content Data
import blogPosts from './Data/blogPostsData.js'
import projectData from './Data/projectData.js'


class App extends Component {
    constructor() {
        super();
        this.state = {

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
                    <Header 
                        blog={this.blog}
                        projects={this.projects}
                    />

                    {/* Body Content Projects */}
                    <Portfolio
                        projects={this.projects} />

                    {/* Body Content Blogs */}
                    <Blog
                        blog={this.blog} />

                {/* <p>{projectData[0].name}</p> */}
                    <Footer
                        contact={this.contact} />

                </div>
            </>
        )
    }
}

export default App