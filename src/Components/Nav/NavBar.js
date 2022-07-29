import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './NavBar.css'


const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          {/* <Navbar.Brand href="/home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/home">
                <h5>Home</h5>
              </Link>
            </Nav.Link>
            
            {/* <Nav.Link href="#features">Servicios</Nav.Link> */}
            <Nav.Link>
              <Link to="/nosotros">
                <h5>Nosotros</h5>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    // <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    //   <Container>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Link to="/">Home</Link>
    //         <Link to="/nosotros">Nosotros</Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  )
}

export default NavBar;