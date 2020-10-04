import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import About1 from '../Images/about1.jpg'
import Company from '../Images/company.jpg'
class VisionComponent extends Component{
    render(){
        return(
            <div>
                <div style={{width:'100vw', height:'70vh',backgroundImage:`url(${About1})`,backgroundSize: '100% 100%'}}>
                    {/* <img src={About1} alt="about" width = '100%'/> */}
                </div>
                 <Container style={{marginTop:'2%'}}>
                 <span style = {{fontFamily:'first',color:'#195e83',fontSize:'30pt'}}>Vision | Mission | Values</span><br/><br/>
                 <span  class='about'>In order to attain our long-term success, every employee must commit to a shared goal, shaping who we are and what we stand for </span>
                 <br/><br/><br/><span style = {{fontFamily:'first',color:'#195e83',fontSize:'20pt'}}>Our Vision</span><br/><br/>

                <Row >
                    <Col xs = {12} md ={6} style={{paddingTop:'2%'}}>
                        <div class='about' style = {{fontSize:'12pt',lineHeight:'120%'}}>
                        We aim to be a global leading company for pigment emulsions and stand out by above average value creation for <br/>
                        all our customers, employees and imvestors/stakeholders.
                        </div>
                    </Col>
                    <Col xs = {12} md ={6} style={{paddingTop:'2%'}}>
                        <img src={Company} alt="company" width='100%'/> 
                    </Col>
                </Row>
                <br/><br/><br/><span style = {{fontFamily:'first',color:'#195e83',fontSize:'20pt'}}>Our Mission</span><br/><br/>

                <Row >
                    <Col xs = {12} md ={6} style={{paddingTop:'2%'}}>
                        <div class='about' style = {{fontSize:'12pt',lineHeight:'120%'}}>
                        Our mission clearly expresses who we are and what we stand for as a brand and as a company.
                        </div>
                    </Col>
                    <Col xs = {12} md ={6} style={{paddingTop:'2%'}}>
                        <img src={Company} alt="company" width='100%'/> 
                    </Col>
                </Row>
                <br/><br/><br/><span style = {{fontFamily:'first',color:'#195e83',fontSize:'20pt'}}>Our Values</span><br/><br/>

                <Row >
                    <Col xs = {12} md ={6} style={{paddingTop:'2%'}}>
                        <div class='about' style = {{fontSize:'12pt',lineHeight:'120%'}}>
                        Continuously challenging the status quo in making our industry more suitable and sustainable. 
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
export default VisionComponent;
