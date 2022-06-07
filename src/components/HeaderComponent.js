import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse, NavLink } from 'reactstrap';


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
                <Navbar sticky='top' expand='md' light>
                        <NavbarToggler onClick={this.toggleNav} />
                        
                        <NavbarBrand href='/'>
                                <img src='./assets/images/initials-logo-6-3-22.png' alt='AMS' height={100}/>
                        </NavbarBrand> 
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href='/'>
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