import React from 'react';
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function Nav() {
    let projectPage = false
    if (window.location.pathname === "/") {
        projectPage = false
    } else if (window.location.pathname === "/projects") {
        projectPage = true
    }
   
        return (
            <Row className="g-0" style={{ height: '100px', margin: "0px auto"}}>
                <Col xs="12" md="12" lg="12" style={{ height: '48px', margin: "0px auto"}}></Col>
                <Col xs="1" md="1" lg="1"></Col>
                
                <Col xs="3" md="3" lg="2" style={{width: 'content'}}>
                    <h4 style={{marginTop: "5px"}}>Easton Shaum</h4>
                </Col>
                <Col xs="4" md="2" lg="4"></Col>
                {projectPage 
                    ? 
                    <Col xs="2" md="2" lg="1">
                        <Link to="/"  className="btn btn-outline-secondary" style={{textColor: "white" }}>About Me</Link>
                    </Col>
                    :
                    <Col xs="2" md="2" lg="1">
                        <Link to="/projects"  className="btn btn-outline-secondary projectBtn" style={{textColor: "white"}}>Projects</Link>
                    </Col>
                }
                <Col xs="2" md="1" lg="1"></Col>
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


export default Nav;