import React, { useState } from 'react';
import { Nav, Navbar, NavItem, NavbarToggler, Collapse, NavLink, Container } from 'reactstrap';

function Header() {
    const [isOpen, setIsOpen ] = useState(false);

    return (
        <div className='navbar'>
            <Navbar bg='light' varient='light' expand='md'>
                <div className='row mx-auto'>
                    <div className='col-md-8'>
                    
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
                        
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;