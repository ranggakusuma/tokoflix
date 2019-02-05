import React, { Component } from 'react'

import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar variant={'dark'} expand="lg" sticky="top" style={styleLayout}>
        <Navbar.Brand href="#home">TokoFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Category" id="basic-nav-dropdown" style={{width: '8vw'}}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <InputGroup className="my-1 mx-2">
            <FormControl
              placeholder="Find Movie"
              aria-label="Find Movie"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              {/* <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text> */}
              <Button variant="secondary"><FontAwesomeIcon icon={faSearch} /></Button>
            </InputGroup.Append>
          </InputGroup>
          <Button variant="danger" style={{width: '8vw'}}><FontAwesomeIcon icon={faUser} /> Login</Button>

        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const styleLayout = {
  backgroundColor: '#42b549',
  paddingLeft: '5vw',
  paddingRight: '5vw'
}