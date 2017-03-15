import React from "react";
import { Navbar, Nav, NavItem, Image, NavDropdown } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import LoginView from "./login/login-view"

const App = (props) => (
  <div>
    {
      'user.sessionId' === 'user.sessionId' ?
        <div>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Image src={process.env.PUBLIC_URL + '/data/home/logo.svg'}/>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <IndexLinkContainer to="/">
                  <NavItem eventKey={1}>Wydarzenia</NavItem>
                </IndexLinkContainer>
                <LinkContainer to="/movies">
                  <NavItem eventKey={2}>Lista filmów</NavItem>
                </LinkContainer>
                <NavDropdown eventKey={3} id="dropdown1" title="Pozostałe">
                  <LinkContainer to="/login">
                    <NavItem eventKey={3.1}>Zaloguj</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/movie/1">
                    <NavItem eventKey={3.2}>Film</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/user/3">
                    <NavItem eventKey={3.3}>Sąsiad</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/users">
                    <NavItem eventKey={3.4}>Lista sąsiadów</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/event">
                    <NavItem eventKey={3.5}>Wydarzenie</NavItem>
                  </LinkContainer>
                </NavDropdown>
              </Nav>

              <Nav pullRight>

                <NavDropdown eventKey={4} id="dropdown2" title="Użytkownik">
                  <LinkContainer to="/user/3">
                    <NavItem eventKey={4.1}>Moje Konto</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/">
                    <NavItem eventKey={4.2}>Wyloguj</NavItem>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {props.children}
        </div>
        : <LoginView />
    }
  </div>
)

export default App