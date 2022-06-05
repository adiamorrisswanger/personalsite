import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavbarToggler, Collapse, NavLink, NavbarBrand } from 'reactstrap';


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
                <Navbar sticky='top' expand='md' fluid>
                    <NavbarBrand href='/'><img src='./assets/initials-logo-6-3-22.png' alt='AMS' width='30' height='30'/></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href='/' active>
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href='/portfolio'>
                                            Portfolio
                                        </NavLink>    
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href='/contact'>
                                            Contact
                                         </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                </Navbar>
        )
    }
        
    
    
}

export default Header;