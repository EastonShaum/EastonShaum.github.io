import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'




function Nav() {

    return (
        
            <Row style={{ height: '100px', margin: "0px auto", flexWrap: "nowrap"}}>
                <Col xs="0" lg="1"></Col>
                <Col xs lg="2" style={{width: 'content'}}>
                    Easton Shaum
                </Col>
                <Col md="3"></Col>
                <Col xs lg="2">
                    About Me
                </Col>
                <Col xs lg="2">
                    Projects
                </Col>
                <Col xs lg="2">
                    <a href="https://github.com/EastonShaum" target="_blank" rel="noreferrer">Github</a>
                </Col>
            </Row>
        
    )
}

export default Nav;