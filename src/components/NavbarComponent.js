import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/" className="nav-link"> Home </Nav.Link>
                            <Nav.Link href="/about" className="nav-link"> About </Nav.Link>
                            <Nav.Link href="/contact" className="nav-link"> Contact </Nav.Link>
                            <Nav.Link href="/services" className="nav-link"> Services </Nav.Link>
                            <Nav.Link href="/pricing" className="nav-link">Pricing</Nav.Link>
                            <Nav.Link href="/signup"> Sign Up </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                    
                </Navbar>
            </div>
        )
    }
}
