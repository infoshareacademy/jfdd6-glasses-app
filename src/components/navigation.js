import React from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

class App extends React.Component {

render() {
  return (
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
            <LinkContainer to="/movie">
              <NavItem eventKey={1}>Film</NavItem>
            </LinkContainer>
            <LinkContainer to="/movies">
              <NavItem eventKey={2}>Lista filmów</NavItem>
            </LinkContainer>
            <LinkContainer to="/user/:userId">
              <NavItem eventKey={3}>Sąsiad</NavItem>
            </LinkContainer>
            <LinkContainer to="/users">
              <NavItem eventKey={4}>Lista sąsiadów</NavItem>
            </LinkContainer>
            <LinkContainer to="/event">
              <NavItem eventKey={5}>Wydarzenie</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </div>
  )
}
}

export default App