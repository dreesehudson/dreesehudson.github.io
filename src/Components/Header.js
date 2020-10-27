import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar className="bg-primary fixed-top" light expand="sm">
                <NavbarBrand className="text-light" href="/">RH</NavbarBrand>
                <NavbarToggler className="bg-light" onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {props.pages.map((item, idx) =>
                            <NavItem key={idx}>
                                <NavLink className="text-light" onClick={() => props.setPage(item.path)}>
                                    <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                                    {item.page}
                                </NavLink>
                            </NavItem>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

// <header>
//     <Nav className="navbar navbar-expand-sm navbar-primary bg-primary fixed-top">
//         <h1 className="ml-3 text-light">
//             RH
//             </h1>
//         <Button className="navbar-toggler text-light" type="button" data-toggle="collapse"
//             data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </Button>
//         <div className="collapse navbar-collapse float-right" id="navbarNav">
//             <ul className="navbar-nav py-3 ml-auto">
//                 {/* Map Links */}
//                 {props.pages.map((item, idx) =>
//                 <NavItem key={idx} className="text-light mx-3">
//                     <i className="{item.icon} mr-2"></i>
//                     <NavLink className="text-light" /*href={#}*/>{item.name}</NavLink>
//                 </NavItem>

//                 )
//                 }
//             </ul>
//         </div>
//     </Nav>
// </header>);












export default Header