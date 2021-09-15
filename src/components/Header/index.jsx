import React from 'react';
import Nav from '../Nav';

import Navbar from 'react-bootstrap/Navbar'



function Header() {

    return (
        <div>
            
                <Navbar bg="light" style={{fluid: "true", padding: "0"}} >
                        <Nav></Nav>
                </Navbar> 
            
            
        </div>
    )
}

export default Header;