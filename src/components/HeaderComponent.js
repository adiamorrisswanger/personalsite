import React, { useState } from 'react';
import { Nav, Navbar, NavItem, NavbarToggler, Collapse, NavLink } from 'reactstrap';

function Header() {
    const [isOpen, setIsOpen ] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='navbar'>
            <Navbar expand='md'>
                <div className='container'>
                    <Collapse navbar isOpen={isOpen}  />
                        <Nav navbar>
                            <NavItem>
                                <NavLink href='#' active>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#'>Portfolio</NavLink>    
                            </NavItem>
                            <NavItem>
                                <NavLink href='#'>Resume</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#'>Contact</NavLink>
                            </NavItem>
                        </Nav>
                    <NavbarToggler onClick={toggle} />
                </div>
            </Navbar>
        </div>
    )
}

export default Header;