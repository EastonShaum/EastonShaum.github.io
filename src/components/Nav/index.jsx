import React from 'react';
import { Col, Row } from 'react-bootstrap'




function Nav() {
    if (window.location.pathname === "/") {
        return (
        
            <Row style={{ height: '100px', margin: "0px auto"}}>
                <Col xs="12" md="12" lg="12"></Col>
                <Col xs="1" md="1" lg="1"></Col>
                <Col xs="10" md="2" lg="2" style={{width: 'content'}}>
                    Easton Shaum
                </Col>
                <Col xs="1" md="5" lg="5"></Col>
                <Col xs="6" md="2" lg="2">
                    <a href="/projects"  className="btn btn-outline-secondary">Projects</a>
                    
                </Col>
                <Col xs="6" md="2" lg="2">
                    <a href="https://github.com/EastonShaum" target="_blank" rel="noreferrer" className="btn btn-outline-secondary">Github</a>
                </Col>
            </Row>
        
        )
    } else {
        return (
        
            <Row style={{ height: '100px', margin: "0px auto"}}>
                <Col xs="12" md="12" lg="12"></Col>
                <Col xs="1" md="1" lg="1"></Col>
                <Col xs="10" md="2" lg="2" style={{width: 'content'}}>
                    Easton Shaum
                </Col>
                <Col xs="1" md="5" lg="5"></Col>
                <Col xs="6" md="2" lg="2">
                    <a href="/"  className="btn btn-outline-secondary">About Me</a>
                    
                </Col>
                <Col xs="6" md="2" lg="2">
                    <a href="https://github.com/EastonShaum" target="_blank" rel="noreferrer" className="btn btn-outline-secondary">Github</a>
                </Col>
            </Row>
        
        )
    }
    
}


export default Nav;