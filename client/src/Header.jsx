import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from './assets/TravelBuddyLogov4.png'; // Ensure you have a logo image in the assets folder
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
            width="170" // Increased width
            height="50" // Increased height, maintaining aspect ratio (adjust as needed)
            // Removed className="d-inline-block align-top" if it was causing issues,
            // or ensure your CSS for it doesn't conflict with width/height
            alt="TravelBuddy logo"
            style={{ objectFit: 'contain' }} // Ensures the image fits within the dimensions without stretching
          />{' '}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* User greeting */}
            <Nav.Item className="me-3">
              <span className="navbar-text">Hello {user.name}</span>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;