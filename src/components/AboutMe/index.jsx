import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import Portrait from '../../assets/images/Portrait.jpeg'

import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import ProjectList from '../ProjectList';

import contactMe from '../../utils/contactMe'



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
                                Easton Shaum is a begining Junior Developer that just finished a full stack coding bootcamp with the University of Utah. He is dedicated to learning more about code every single day and working with others on projects and apps.
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
                        <h4>Contact Me: <a href="https://eastonshaum@gmail.com" target="_blank" rel="noreferrer" className="link">EastonShaum@gmail.com</a> or:</h4>
                        <form method="post" action="handler.php" id="contact-form">
                            <label htmlFor="contact-email" className="form-label">Your Email</label>
                            <input type="text" className="form-control" id="contact-email" name="contact-email" placeholder="Your Email" required/>

                            <label htmlFor="contact-name" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="contact-name" name="contact-name" placeholder="Your Name" required/>

                            <label htmlFor="contact-message" className="form-label">Message</label>
                            <textarea type="textarea" className="form-control" id="contact-message" name="contact-message" placeholder="Your Message"/>

                            <button id="submitBtn" type="submit"  className="btn btn-secondary" style={{margin: "10px 0px"}}>Submit</button>
                        </form>
                        <div id="success-message" style={{width:"100%", height:"100%", display: "none"}}>
                            <h3>Posted your message successfully!</h3>
                        </div>
                        <div id="error-message"
                                style={{width:"100%", height:"100%", display: "none"}}>
                                    <h3>Error</h3>
                                    Sorry there was an error sending your form.

                        </div>

                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default AboutMe;