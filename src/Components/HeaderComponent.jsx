import React from 'react'
import { Component } from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="lg" style={{backgroundColor:"white"}}>
                    <Container>
                        <h3 style={{ color: "#195e83" }}>TDC</h3>

                        <Navbar.Toggle class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar top-bar"></span>
                            <span class="icon-bar middle-bar"></span>
                            <span class="icon-bar bottom-bar"></span>
                        </Navbar.Toggle>

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto text-center" >

                                <div class="dropdown">

                                    <div class="btn btn-one">
                                        <span><Nav.Link class="dropbtn fill" style={{ color: "#195e83" }}>Company</Nav.Link></span>
                                    </div>


                                    <div class="dropdown-content">
                                        <Link to="/">About Us</Link>
                                        <Link to="/">Vision/Mission/Values</Link>
                                        <Link to="/">Quality Control</Link>
                                        <Link to="/">Director's Message/Our Founder</Link>
                                        <Link to="/">Affiliation</Link>
                                    </div>
                                </div>


                                <div class="btn btn-one">
                                    <span><Nav.Link to="/about" style={{ color: "#195e83" }}>Product Solutions</Nav.Link></span>
                                </div>



                                <div class="dropdown">

                                    <div class="btn btn-one">
                                        <span><Nav.Link class="dropbtn" style={{ color: "#195e83" }}>Careers</Nav.Link></span>
                                    </div>

                                    <div class="dropdown-content">
                                        <Link to="/">Why TDC?</Link>
                                    </div>
                                </div>

                                <div class="dropdown">

                                    <div class="btn btn-one">
                                        <span><Nav.Link class="dropbtn" style={{ color: "#195e83" }}>Contact Us</Nav.Link></span>
                                    </div>

                                    <div class="dropdown-content">
                                        <Link to="/">Head Office</Link>
                                        <Link to="/">Manufacturing Unit</Link>
                                        <Link to="/">Enquiry Form</Link>
                                    </div>
                                </div>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </>
        )
    }
}

export default HeaderComponent