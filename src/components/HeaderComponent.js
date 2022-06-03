import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavbarToggler, Collapse, NavLink } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this)
    };
    
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
                <Navbar sticky='top' expand='md' >
                        <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
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
                            </Collapse>
                </Navbar>
        )
    }
        
    
    
}

export default Header;