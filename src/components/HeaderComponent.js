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
//To Do: NavbarBrand logo
    render() {
        return (
                <Navbar sticky='top' expand='md' light>
                        <NavbarToggler onClick={this.toggleNav} />
                        
                        {/* <NavbarBrand href='/'>
                                <p>AMS</p>
                        </NavbarBrand> */}
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