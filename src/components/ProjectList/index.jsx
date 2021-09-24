import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'

function ProjectList() {

    return (
        <div style={{textAlign: "left"}}>
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
            </Card>
        </div>
    )
}

export default ProjectList;