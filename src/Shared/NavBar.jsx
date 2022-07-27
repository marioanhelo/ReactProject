
import Nav from "react-bootstrap/Nav";
import {Link} from  'react-router-dom';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
//import Button from 'react-bootstrap/Button';
import { Search } from "../Components/Search";

export const NavBar = () => {

  return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>E-Commerce Site</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
              </Nav>
            <Search />
            </Navbar.Collapse>
          </Container>
      </Navbar>
      );
}
