import React from 'react'
import {Navbar, Nav, NavItem, Image} from 'react-bootstrap'
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap'

const App = (props) => (
  <div>
    {
      'user.sessionId' === 'user.sessionId' ?
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Image src={process.env.PUBLIC_URL + '/data/home/logo.svg'} />
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <IndexLinkContainer to="/">
                  <NavItem eventKey={1}>Wydarzenia</NavItem>
                </IndexLinkContainer>
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
        : <div>Moduł Adama</div>
    }
  </div>
)

export default App