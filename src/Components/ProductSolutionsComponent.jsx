import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import img from '../Images/69.jpg'
import text from '../Images/text.jpg'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ProductSolutionsComponent extends Component {
    render() {
        return (
            <>

                <Image src={img} fluid className="mb-3" style={{height:"400px",width:"100%"}}/>
                <Row>
                    <Col xs={12} md={6} className="mb-3">
                        <div>
                            <div class="hovereffect">
                                <img class="img-responsive" src={text} alt="" />
                                <div class="overlay">
                                    <h2>Product</h2>
                                    <a class="info" href="#">Explore</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mb-3">
                        <div>
                            <div class="hovereffect">
                            <img class="img-responsive" src={text} alt="" />
                                <div class="overlay">
                                    <h2>Product</h2>
                                    <a class="info" href="#">Explore</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6} className="mb-3">

                        <div class="hovereffect">
                        <img class="img-responsive" src={text} alt="" />
                            <div class="overlay">
                                <h2>Product</h2>
                                <a class="info" href="#">Explore</a>
                            </div>
                        </div>

                    </Col>
                    <Col xs={12} md={6} className="mb-3">
                        <div >
                            <div class="hovereffect">
                            <img class="img-responsive" src={text} alt="" />
                                <div class="overlay">
                                    <h2>Product</h2>
                                    <a class="info" href="#">Explore</a>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </>
        )
    }
}

export default ProductSolutionsComponent