import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import CartSummary from '../cart/CartSummary'


export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto" >
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <CartSummary/>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    )
  }
}


