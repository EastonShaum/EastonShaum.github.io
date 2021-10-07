import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import Portrait from '../../assets/images/Portrait.jpeg'

import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import ProjectList from '../ProjectList';



function AboutMe() {

    return (
        <div>
            <Header></Header>
            <Container fluid="xxl">
                <div style={{textAlign: "left", padding: "100px 0px", minHeight: "80vh", display: "flex",  justifyContent: "center",  alignItems: "center"}}>
                    <div className="aboutMe">
                        <div style={{display: "flex"}}>
                            <div  className="align-middle" style={{float: "left"}}>
                                <h1  style={{fontStyle: "italic"}}>
                                    <p className="text-muted top-tag" style={{fontSize: "75%"}}>&lt;h1&gt;</p>
                                    <p className="font-weight-bolder" style={{fontSize: "150%"}}>Hello!</p>
                                    <p className="text-muted" style={{fontSize: "75%"}}>&lt;h1&gt;</p>
                                </h1>
                            </div>
                            <div  style={{margin: "auto"}}>
                            </div>
                            <div className="portrait-div" style={{}}>
                                <img className="portrait" src={Portrait} alt="My portrait" ></img>
                            </div>
                        </div>
                        <div >
                            <h4>
                                Easton Shaum is begining Junior Developer that just finsihed a full stack coding bootcamp with the University of Utah. He is dedicated to learning more about code every single day and working with others on projects and apps.
                            </h4>
                        </div>
                        <br></br>
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
                        <br></br>
                        <h4><a href="https://github.com/EastonShaum" target="_blank" rel="noreferrer" className="link github-link">Github</a></h4>
                        <h4>My Resume: <a href="/EastonShaumResume.docx" download className="link">Simple</a>
                        , <a href="/EastonShaumResume.docx" download className="link">Styled</a></h4>
                        <h4>Contact Me: <a href="https://eastonshaum@gmail.com" target="_blank" rel="noreferrer" className="link">EastonShaum@gmail.com</a></h4>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default AboutMe;