import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar className="nav-bar">
      <Container>
        <img className='burger-logo' src="https://react-builder-burger.firebaseapp.com/static/media/burger-logo.b8503d26.png" alt="Burger Logo" />
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to="/"> Burger Builder </Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/login">Login</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
