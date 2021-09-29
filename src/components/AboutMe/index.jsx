import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectList from '../ProjectList';



function AboutMe() {

    return (
        <div>
            <Container fluid="xxl">
                <div style={{textAlign: "left", padding: "100px 0px", minHeight: "80vh", display: "flex",  justifyContent: "center",  alignItems: "center"}}>
                    <div style={{width: "60%", margin: "0px auto", maxwidth: "600px", minwidth: "500px" }}>
                        <div style={{display: "flex"}}>
                            <h1  style={{fontStyle: "italic"}}>
                                <p className="text-muted" style={{fontSize: "75%"}}>&lt;h1&gt;</p>
                                <p className="font-weight-bolder" style={{fontSize: "150%"}}>Hello!</p>
                                <p className="text-muted" style={{fontSize: "75%"}}>&lt;h1&gt;</p>
                            </h1>
                        </div>
                        <div >
                            <h4>
                                Easton Shaum is Junior Developer cnmxbvm,nc hfjdks hfjkewh huweh kj hdfjsk  shfjwk f whfjk dshjk hjks 
                            </h4>
                        </div>
                        <div >
                            <h4>
                                Technical Skills: 
                            </h4>
                            <ul>
                                <li>
                                    Languages: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL
                                </li>
                                <li>
                                    Applications: GitHub, MongoDB, MySQL
                                </li>
                                <li>
                                    Tools: Express, React, Node, Query, Bootstrap
                                </li>
                            </ul>
                        </div>
                        <h4><a href="https://eastonshaum@gmail.com" target="_blank" rel="noreferrer" className="link">Contact Me: EastonShaum@gmail.com</a></h4>
                    </div>
                </div>
            </Container>
            
        </div>
    )
}

export default AboutMe;