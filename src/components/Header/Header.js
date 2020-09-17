import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import Logo from '../Image/Logo.png';

const Header = () => {
    return (
        <div className= 'mb-5'>
    <Navbar bg="transparent" variant="dark" className='text-light'>
    <Navbar.Brand href="#home"><img style={{height: '50px', color: 'white'}} src={Logo} alt=''></img></Navbar.Brand>
    <Nav className="mr-auto">
    <FormControl type="text" placeholder= "Search Your Destination..." className="mx-5 bg-transparent " />
      <Nav.Link href="/home" className='text-light mx-3'>News</Nav.Link>
      <Nav.Link href="/hotel" className='text-light mx-3'>Destination</Nav.Link>
      <Nav.Link href="/booking" className='text-light mx-3'>Blog</Nav.Link>
      <Nav.Link href="#pricing" className='text-light mx-3'>Contact</Nav.Link>
    </Nav>
    <Form inline >
      
      <Button variant="warning">Log in</Button>
    </Form>
  </Navbar>
  </div>
    );
};

export default Header;