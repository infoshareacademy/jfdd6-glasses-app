import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

const App = (props) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/">
            <NavItem eventKey={1}>Wydarzenia</NavItem>
          </LinkContainer>
          <LinkContainer to="/movie/1">
            <NavItem eventKey={2}>Film</NavItem>
          </LinkContainer>
          <LinkContainer to="/movies">
            <NavItem eventKey={3}>Lista filmów</NavItem>
          </LinkContainer>
          <LinkContainer to="/user/3">
            <NavItem eventKey={4}>Sąsiad</NavItem>
          </LinkContainer>
          <LinkContainer to="/users">
            <NavItem eventKey={5}>Lista sąsiadów</NavItem>
          </LinkContainer>
          <LinkContainer to="/event">
            <NavItem eventKey={6}>Wydarzenie</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  {props.children}
  </div>
)

export default App