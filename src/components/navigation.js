import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

const App = (props) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/home">
            Strona główna
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/movie/1">
            <NavItem eventKey={1}>Film</NavItem>
          </LinkContainer>
          <LinkContainer to="/movies">
            <NavItem eventKey={2}>Lista filmów</NavItem>
          </LinkContainer>
          <LinkContainer to="/user/3">
            <NavItem eventKey={3}>Sąsiad</NavItem>
          </LinkContainer>
          <LinkContainer to="/users">
            <NavItem eventKey={4}>Lista sąsiadów</NavItem>
          </LinkContainer>
          <LinkContainer to="/event/2">
            <NavItem eventKey={5}>Wydarzenie</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {props.children}
  </div>
)

export default App