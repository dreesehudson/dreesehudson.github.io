// <!-- Footer with contact Info -->

import React from 'react'

function Footer () {
        return (
            <div className="container-fluid bg-primary">
                <div className="row my-2">
                    <div className="col">
                        <h6 className="text-light text-center"> Contact Me</h6>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col">
                        <ul className="nav list-unstyled justify-content-center">
                            <li className="nav-item px-3"><i className="fas fa-paper-plane text-light"></i><a
                                className="text-light pl-2"
                                href="mailto:david.reese.hudson@gmail.com">david.reese.hudson@gmail.com</a></li>
                            <li className="nav-item px-3"><i className="fas fa-code-branch text-light"></i><a
                                className="text-light pl-2" href="https://github.com/dreesehudson">Github</a>
                            </li>
                            <li className="nav-item px-3"><i className="fab fa-linkedin text-light"></i><a
                                className="text-light pl-2" href="https://linkedin.com/dreesehudson">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}

export default Footer