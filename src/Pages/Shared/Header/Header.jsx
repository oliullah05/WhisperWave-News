import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-5 mb-5'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
            </div>
            <div className='d-flex mb-5'>
                <Button variant="danger">Danger</Button>
                <Marquee speed={100}>
                    The quick brown fox jumps over the lazy  dog The quick brown fox jumps over the lazy  dog The quick brown fox jumps over the lazy  dog
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
           
          </Nav>
          <Nav >
            <Nav.Link className='my-auto' href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             <Button variant='secondary'>Log in</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;