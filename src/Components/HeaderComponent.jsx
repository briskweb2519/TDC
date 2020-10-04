import React from 'react'
import { Component } from 'react';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <>

                <Navbar sticky="top" style={{backgroundColor:"white"}} collapseOnHover expand="lg" >
                    <Container>
                        <Navbar.Brand href="#home">TDC</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto" >

                                <NavDropdown style={{ Color: "blue" }} className="btn-one" renderMenuOnMount={true} title="Company" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Vision/Mission/Values</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Quality Control</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Director's Message/Our Founder</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">Affiliation</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link className="btn-one" href="#pricing">Product Solutions</Nav.Link>

                                <NavDropdown className="btn-one" renderMenuOnMount={true} title="Careers" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Why TDC?</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown className="btn-one" renderMenuOnMount={true} title="Contact Us" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Head Office</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Manufacturing Unit</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Enquiry Form</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        )
    }
}

export default HeaderComponent