import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'

import projects from '../../assets/projects';

function ProjectList() {
    return (
        <div style={{textAlign: "left"}}>
            <Row className="g-0">
                <Col xs="0" md="1" lg="1"></Col>
                <Col xs="12" md="10" lg="10">
                    {projects.map((project) => {
                        // Title links to the live site when there is one, otherwise to the repo.
                        const titleLink = project.link || project.github;
                        return (
                            <Card key={project.name} className="mb-3" style={{margin: "48px"}}>
                                <Row className="g-0">
                                    <Col xs="12" md="4" lg="4">
                                        <img
                                            src={project.picture}
                                            className="img-fluid rounded-start"
                                            alt={project.alt}
                                            width="1200"
                                            height="630"
                                            loading="lazy"
                                        />
                                    </Col>
                                    <Col xs="12" md="8" lg="8">
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                {titleLink
                                                    ? <a href={titleLink} target="_blank" rel="noreferrer" className="link">{project.name}</a>
                                                    : project.name}
                                            </h4>
                                            {project.link && project.github && (
                                                <h6 className="card-title"><a href={project.github} target="_blank" rel="noreferrer" className="link">Github repo</a></h6>
                                            )}
                                            {project.link && !project.github && (
                                                <h6 className="card-title"><a href={project.link} target="_blank" rel="noreferrer" className="link">Live site</a></h6>
                                            )}
                                            {!project.link && project.github && (
                                                <h6 className="card-title"><a href={project.github} target="_blank" rel="noreferrer" className="link">Github repo</a></h6>
                                            )}
                                            <p className="card-text">{project.desc}</p>
                                            <p className="card-text"><small className="text-muted">Technologies: {project.tech}</small></p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        );
                    })}
                </Col>
                <Col xs="0" md="1" lg="1"></Col>
            </Row>
        </div>
    )
}

export default ProjectList;
