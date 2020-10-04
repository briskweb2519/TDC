import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import About1 from '../Images/about1.jpg'
import Company from '../Images/company.jpg'
class AboutComponent extends Component{
    render(){
        return(
            <div>
                <div style={{width:'100vw', height:'70vh',backgroundImage:`url(${About1})`,backgroundSize: '100% 100%'}}>
                    {/* <img src={About1} alt="about" width = '100%'/> */}
                </div>
                 <Container style={{marginTop:'2%'}}>
                 <span style = {{fontFamily:'first',color:'#195e83',fontSize:'30pt'}}>About the company</span><br/><br/>

                <Row >
                    <Col xs = {12} md ={6} style={{paddingTop:'2%'}}>
                        <div class='about' style = {{fontSize:'12pt',lineHeight:'120%'}}>
                        <br/>
                        Established in 1992, <br/>
                        <span style = {{fontSize:'15pt', color:'#195e83'}}>Tejas Dyes and Chemicals</span> is a global diversified provider of pigment emulsions and printing binders.
                        <br/><br/>
                        Located in Gujarat, India, the company operates a highly unified, customer oriented platform that delievers specialised performance and color solutions in and across the country
                        </div>
                    </Col>
                    <Col xs = {12} md ={6} style={{paddingTop:'2%'}}>
                        <img src={Company} alt="company" width='100%'/> 
                    </Col>
                </Row>
                </Container>

            </div>
        )
    }
}
export default AboutComponent;
