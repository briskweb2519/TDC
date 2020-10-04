import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import img from '../Images/69.jpg'

import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ProductSolutionsComponent extends Component {
    render() {
        return (
            <>

                <Image src={img} fluid className="mb-3" />
                <Row>
                    <Col xs={12} md={6} className="mb-3">
                        <Card className="frame">
                            <Card.Img variant="top" src={img} />
                            <Card.Body class="details">
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className="mb-3">
                        <Card className="frame">
                            <Card.Img variant="top" src={img} />
                            <Card.Body class="details">
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6} className="mb-3">
                        <Card className="frame">
                            <Card.Img variant="top" src={img} />
                            <Card.Body class="details">
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className="mb-3">
                        <Card className="frame">
                            <Card.Img variant="top" src={img} />
                            <Card.Body class="details">
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}

export default ProductSolutionsComponent