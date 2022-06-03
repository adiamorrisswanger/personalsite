import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavbarToggler, Collapse, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                        <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink>
                                            <Link to='/home' active>Home</Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <Link to='/portfolio'>Portfolio</Link>
                                        </NavLink>    
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <Link to='/contact'>Contact</Link>
                                         </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                </Navbar>
        )
    }
        
    
    
}

export default Header;