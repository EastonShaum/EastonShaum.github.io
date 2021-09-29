import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'

import GoalPic from '../../assets/images/GoalPic1.png'
import BitcoinPic from '../../assets/images/bitcoin.svg'

function ProjectList() {

    return (
        <div style={{textAlign: "left"}}>
            <Row className="g-0">
                <Col xs="0" md="1" lg="1"></Col>
                <Col xs="12" md="10" lg="10">
                    <Card className="mb-3" style={{margin: "48px"}}>
                        <Row className="g-0">
                            <Col xs="12" md="4" lg="4">
                                <img src={GoalPic} className="img-fluid rounded-start" alt="Goal Getter medal"></img>
                            </Col>
                            <Col xs="12" md="8" lg="8">
                                <div className="card-body">
                                    <h5 className="card-title"><a href="https://goal-getters-app.herokuapp.com/" target="_blank" rel="noreferrer" className="link">Goal Getter</a></h5>
                                    <h6 className="card-title"><a href="https://github.com/EastonShaum/Goal-Getter" target="_blank" rel="noreferrer" className="link">Github repo</a></h6>
                                    <p className="card-text">Full stack motivational website for setting and accomplishing goals.</p>
                                    <p className="card-text"><small className="text-muted">Technolgies: JavaScript, MySQL, Express </small></p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="mb-3" style={{margin: "48px", contentAlign: "center"}}>
                        <Row className="g-0">
                            <Col xs="12" md="4" lg="4">
                                <img src={BitcoinPic} className="img-fluid rounded-start" alt="Bitcoin logo"></img>
                            </Col>
                            <Col xs="12" md="8" lg="8">
                                <div className="card-body">
                                    <h5 className="card-title"><a href="https://eastonshaum.github.io/Join-Coin/" target="_blank" rel="noreferrer" className="link">Join Coin</a></h5>
                                    <h6 className="card-title"><a href="https://github.com/EastonShaum/Join-Coin" target="_blank" rel="noreferrer" className="link">Github repo</a></h6>
                                    <p className="card-text">Useful website for searching and seeing trending Cryptocurrencies</p>
                                    <p className="card-text"><small className="text-muted">Technolgies: JavaScript, API, Html, CSS </small></p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                    {/* <Card className="mb-3" style={{margin: "40px"}}>
                        <Row className="g-0">
                            <Col className="md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..."></img>
                            </Col>
                            <Col className="md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><a href="" target="_blank" rel="noreferrer" className="link">First title</a></h5>
                                    <h6 className="card-title"><a href="" target="_blank" rel="noreferrer" className="link">Github repo</a></h6>
                                    <p className="card-text">This is the description of the project</p>
                                    <p className="card-text"><small className="text-muted">This could be like a date or technologies for this prject</small></p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="mb-3" style={{margin: "40px"}}>
                        <Row className="g-0">
                            <Col className="md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..."></img>
                            </Col>
                            <Col className="md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><a href="" target="_blank" rel="noreferrer" className="link">First title</a></h5>
                                    <h6 className="card-title"><a href="" target="_blank" rel="noreferrer" className="link">Github repo</a></h6>
                                    <p className="card-text">This is the description of the project</p>
                                    <p className="card-text"><small className="text-muted">This could be like a date or technologies for this prject</small></p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="mb-3" style={{margin: "40px"}}>
                        <Row className="g-0">
                            <Col className="md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..."></img>
                            </Col>
                            <Col className="md-8">
                                <div className="card-body">
                                    <h5 className="card-title"><a href="" target="_blank" rel="noreferrer" className="link">First title</a></h5>
                                    <h6 className="card-title"><a href="" target="_blank" rel="noreferrer" className="link">Github repo</a></h6>
                                    <p className="card-text">This is the description of the project</p>
                                    <p className="card-text"><small className="text-muted">This could be like a date or technologies for this prject</small></p>
                                </div>
                            </Col>
                        </Row>
                    </Card> */}
                </Col>
                <Col xs="0" md="1" lg="1"></Col>
            </Row>
        </div>
    )
}

export default ProjectList;