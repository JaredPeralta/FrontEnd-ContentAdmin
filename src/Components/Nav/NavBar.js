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
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/home">
                <h5>Home</h5>
              </Link>
            </Nav.Link>
            
            <Nav.Link>
              <Link to="/nosotros">
                <h5>Nosotros</h5>
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/servicios">
                <h5>Servicios</h5>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar;