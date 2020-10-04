import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
class AboutComponent extends Component{
    render(){
        return(
            <div>
                 <Container>
                <Row>
                    <Col xs = {12} md ={6}>
                        <div>
                        Established in 1992, <br/>
                        Tejas Dyes and Chemicals is a global diversified provider of pigment emulsions and printing binders.
                        <br/><br/>
                        Located in Gujarat, India, the company operates a highly unified, customer oriented platform that delievers specialised performance and color solutions in and across the country
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                </Container>

            </div>
        )
    }
}
export default AboutComponent;
