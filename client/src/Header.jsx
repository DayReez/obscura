import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from './assets/react.svg';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Header() {
  // Simulating user data from database - replace with actual user data from your auth system
  const user = {
    name: "User"
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="TravelBuddy logo"
          />{' '}
          TravelBuddy
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* User greeting */}
            <Nav.Item className="me-3">
              <span className="navbar-text">Hello {user.name}</span>
            </Nav.Item>
            
            {/* Search bar */}
            <Nav.Item>
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search packages"
                  aria-label="Search packages"
                />
                <Button variant="outline-secondary">
                  <i className="bi bi-search"></i>
                </Button>
              </InputGroup>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;