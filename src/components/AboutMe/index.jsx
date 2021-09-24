import React from 'react';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'



function AboutMe() {

    return (
        <div>
            <Container fluid="xxl">
                <div style={{textAlign: "left", padding: "100px 0px", minHeight: "80vh", display: "flex",  justifyContent: "center",  alignItems: "center"}}>
                    <div style={{width: "60%", margin: "0px auto", maxwidth: "600px", minwidth: "500px" }}>
                        <div >
                            <h4>
                                Easton Shaum is Junior Developer cnmxbvm,nc hfjdks hfjkewh huweh kj hdfjsk  shfjwk f whfjk dshjk hjks 
                            </h4>
                        </div>
                        <div >
                            <h4>
                                Technologies/Skills: 
                            </h4>
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
                        <h4><a href="https://eastonshaum@gmail.com" target="_blank" rel="noreferrer" className="link">Contact</a></h4>
                    </div>
                </div>
            </Container>
            
        </div>
    )
}

export default AboutMe;