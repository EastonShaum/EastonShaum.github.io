import React from 'react';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'



function AboutMe() {

    return (
        <div>
            <Container fluid="xxl">
                <div style={{textAlign: "left", padding: "100px 0px", minHeight: "90vh", display: "flex",  justifyContent: "center",  alignItems: "center"}}>
                    <div style={{width: "60%", margin: "0px auto", maxwidth: "600px", minwidth: "500px" }}>
                        <div >
                            <h3>
                                Easton Shaum is Junior Developer cnmxbvm,nc hfjdks hfjkewh huweh kj hdfjsk  shfjwk f whfjk dshjk hjks 
                            </h3>
                        </div>
                        <div >
                            <h3>
                                Technologies/Skills: 
                            </h3>
                            <ul>
                                <li>
                                    JavaScript
                                </li>
                                <li>
                                    HTML
                                </li>
                                <li>
                                    CSS
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
            
        </div>
    )
}

export default AboutMe;