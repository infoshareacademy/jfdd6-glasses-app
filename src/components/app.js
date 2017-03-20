import React from "react";
import {Navbar, Nav, NavItem, Image, NavDropdown} from "react-bootstrap";
import {LinkContainer, IndexLinkContainer} from "react-router-bootstrap";
import {connect} from 'react-redux'
import {fetchSession} from '../state/session'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../styles/styles-all.css'

export default connect(
  state => ({
    session: state.session,
    user: state.userLogin
  }),
  dispatch => ({
    fetchSessionHelper: (username, password) => dispatch(fetchSession(username, password)),
  })
)(
  class App extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        username: '',
        password: ''
      }
    }

    componentWillMount() {
    }

    render() {
      return this.props.session.data === null ?

        <div className="log-in-background">
          <Grid>
            <Row className="show-grid login-container">
              <Col xs={12} sm={6} className="black-background">
                <p className="welcome">Witaj sąsiedzie!</p>
                <p>
                  Połącz się ze swoimi znajomymi – i innymi ciekawymi ludźmi.
                  Otrzymuj natychmiastowe aktualizacje na tematy, które Cię interesują.
                  Obserwuj rozwój wydarzeń w czasie rzeczywistym, z każdej strony.
                </p>
                <Image src={require("../img/logo.png")} alt="Logo Klatka" className="logo" responsive/>
              </Col>
              <Col xs={12} sm={6}>
                <form className="form-background"
                      onSubmit={(event) => {
                        event.preventDefault()
                        this.props.fetchSessionHelper(this.state.username, this.state.password)
                      }}>
                  <p>Twój login:</p>
                  <input
                    className="login"
                    type="text"
                    placeholder="DobrySąsiad"
                    value={this.state.username}
                    onChange={(event) => this.setState({username: event.target.value})}
                  />
                  <p>Twoje hasło:</p>
                  <input
                    className="login"
                    type="password"
                    placeholder="silneHasło"
                    value={this.state.password}
                    onChange={(event) => this.setState({password: event.target.value})}
                  />

                    <Button bsStyle="warning" className="login-button" type="submit">Zaloguj</Button>
                </form>
              </Col>
            </Row>
          </Grid>
        </div>
        : (
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
                    <LinkContainer to="/movie/1">
                      <NavItem eventKey={3.2}>Film</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/user/3">
                      <NavItem eventKey={3.3}>Sąsiad</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/users">
                      <NavItem eventKey={3.4}>Lista sąsiadów</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/event/2">
                      <NavItem eventKey={3.5}>Wydarzenie</NavItem>
                    </LinkContainer>
                  </NavDropdown>
                </Nav>
                <Nav pullRight>

                  <NavDropdown eventKey={4} id="dropdown2"
                               title={ this.props.user.data ? this.props.user.data.username : 'nieznany'}>

                    <LinkContainer to="/user/3">
                      <NavItem eventKey={4.1}>Moje Konto</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                      <NavItem eventKey={4.2}>Wyloguj</NavItem>
                    </LinkContainer>
                  </NavDropdown>
                </Nav>
                <Navbar.Text pullRight>
                  Zalogowany jako:
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
            {this.props.children}
          </div>
        )
    }
  }
)