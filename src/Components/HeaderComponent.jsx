import React from 'react'
import { Component } from 'react';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <>

                <Navbar sticky="top" style={{backgroundColor:""}} collapseOnHover expand="lg" >
                    <Container>
                        <Navbar.Brand href="#home">TDC</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto" >

                                <NavDropdown style={{ Color: "blue" }} className="btn-one" renderMenuOnMount={true} title="Company" id="collasible-nav-dropdown">
                                    <NavDropdown.Item ><Link className="nav-link" to="/company/aboutus">About Us</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link className="nav-link" to="/company/vision-mission-values">Vision/Mission/Values</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link className="nav-link" to="/company/quality-control">Quality Control</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link className="nav-link" to="/company/director-message">Director's Message/Our Founder</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link className="nav-link" to="/company/affiliation">Affiliation</Link></NavDropdown.Item>
                                </NavDropdown>

                                <Link className="nav-link" to="/product-solutions">Product Sulutions</Link>

                                <NavDropdown className="btn-one" renderMenuOnMount={true} title="Careers" id="collasible-nav-dropdown">
                                <NavDropdown.Item ><Link className="nav-link" to="/careers/whytdc">Why TDC?</Link></NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown className="btn-one" renderMenuOnMount={true} title="Contact Us" id="collasible-nav-dropdown">
                                <NavDropdown.Item ><Link className="nav-link" to="/contact/headoffice">Head Office</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="nav-link" to="/contact/manufacturing-unit">Manufacturing Unit</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="nav-link" to="/contact/product-solutions">Enquiry Form</Link></NavDropdown.Item>
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