import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCodeBranch, faLinkedin } from '@fortawesome/free-solid-svg-icons'
import { Nav, NavItem, Row, Col } from 'reactstrap';

function Footer(props) {
    return (
        <div className="container-fluid bg-primary">
            <Row className="my-2">
                <Col>
                    <h6 className="text-light text-center mt-3"> Contact Me</h6>
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <Nav className="list-unstyled justify-content-center mb-3">
                        {props.contact.map((item, idx) =>
                            <NavItem key={idx} className="px-3"><i className="{item.icon} text-light"></i>
                                <a className="text-light pl-2" target="_blank" rel='noopener noreferrer' href={item.path}>
                                    {item.name}
                                </a>
                            </NavItem>
                        )}
                    </Nav>
                </Col>
            </Row>
        </div>
    );

}

export default Footer