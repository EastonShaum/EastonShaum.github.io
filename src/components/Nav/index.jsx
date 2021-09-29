import React from 'react';
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function Nav() {
    if (window.location.pathname === "/") {
        return (
        
            <Row style={{ height: '100px', margin: "0px auto"}}>
                <Col xs="12" md="12" lg="12" style={{ height: '48px', margin: "0px auto"}}></Col>
                <Col xs="1" md="1" lg="1"></Col>
                
                <Col xs="3" md="3" lg="2" style={{width: 'content'}}>
                    <h4>Easton Shaum</h4>
                </Col>
                <Col xs="3" md="3" lg="6"></Col>
                <Col xs="2" md="2" lg="1">
                    <Link to="/projects"  className="btn btn-outline-secondary">Projects</Link>
                </Col>
                <Col xs="0" md="2" lg="1" className="github-button">
                    <a href="https://github.com/EastonShaum" target="_blank" rel="noreferrer" className="btn btn-outline-secondary">Github</a>
                </Col>
                

                <Col xs="1" md="1" lg="1"></Col>
                <Col xs="12" md="12" lg="12" style={{ height: '24px', margin: "0px auto"}}></Col>
                <Col xs="1" md="1" lg="1"></Col>
                <Col xs="10" md="10" lg="10">
                <div style={{borderBottomColor: "grey", borderBottomStyle: "solid"}}>
                </div>
                </Col>
                <Col xs="1" md="1" lg="1"></Col>
            </Row>
        
        )
    } else {
        return (
            <Row style={{ height: '100px', margin: "0px auto"}}>
                <Col xs="12" md="12" lg="12" style={{ height: '48px', margin: "0px auto"}}></Col>
                <Col xs="1" md="1" lg="1"></Col>
                
                <Col xs="3" md="3" lg="2" style={{width: 'content'}}>
                    <h4>Easton Shaum</h4>
                </Col>
                <Col xs="3" md="3" lg="6"></Col>
                <Col xs="2" md="2" lg="1">
                    <Link to="/"  className="btn btn btn-dark" style={{textColor: "white"}}>Projects</Link>
                </Col>
                <Col xs="0" md="2" lg="1" className="github-button">
                    <a href="https://github.com/EastonShaum" target="_blank" rel="noreferrer" className="btn btn-outline-secondary">Github</a>
                </Col>
                

                <Col xs="1" md="1" lg="1"></Col>
                <Col xs="12" md="12" lg="12" style={{ height: '24px', margin: "0px auto"}}></Col>
                <Col xs="1" md="1" lg="1"></Col>
                <Col xs="10" md="10" lg="10">
                <div style={{borderBottomColor: "grey", borderBottomStyle: "solid"}}>
                </div>
                </Col>
                <Col xs="1" md="1" lg="1"></Col>
            </Row>
        
        )
    }
    
}


export default Nav;