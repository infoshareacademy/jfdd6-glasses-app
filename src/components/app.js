import React from "react";
import {Navbar, Nav, NavItem, Image, NavDropdown} from "react-bootstrap";
import {LinkContainer, IndexLinkContainer} from "react-router-bootstrap";
import {connect} from 'react-redux'
import {fetchSession, endSession, letGuestIn} from '../state/session'
import {Grid, Row, Col, Button, ButtonToolbar} from 'react-bootstrap'

export default connect(
  state => ({
    session: state.session,
    user: state.userLogin
  }),
  dispatch => ({
    fetchSessionHelper: (username, password) => dispatch(fetchSession(username, password)),
    endSessionHelper: (token) => dispatch(endSession(token)),
    letGuestIn: () => dispatch(letGuestIn())
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

    render() {
      return this.props.session.data === null ?

        <div className="log-in-background">
          <Grid>
            <Row className="show-grid login-container">
              <Col xs={12} sm={6} className="black-background">
                <p className="welcome">Witaj Sąsiedzie!</p>
                <p>
                  Połącz się ze swoimi znajomymi i innymi ciekawymi ludźmi mieszkającymi nieopodal, którzy dzielą z Tobą tę samą pasję - FILMY.
                  Obserwuj kalendarz z seansami filmowymi, zapisuj się na projekcje lub twórz własne wydarzenia.
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
                  <ButtonToolbar>
                    <Button bsStyle="warning" className="login-button" type="submit">Zaloguj</Button>
                    <Button type="button" className="login-button" onClick={() => this.props.letGuestIn()}>Wejdź jako gość</Button>
                  </ButtonToolbar>
                  {this.props.session.error ? <p className="login-error">Zły login lub hasło</p> : null}
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
                    <NavItem eventKey={2}>Filmy</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/users">
                    <NavItem eventKey={3}>Sąsiedzi</NavItem>
                  </LinkContainer>
                </Nav>
                <Nav pullRight>
                  <NavDropdown eventKey={4} id="dropdown2"
                               title={ this.props.user.data ? 'Zalogowany jako: ' + this.props.user.data.username : 'Zalogowany jako: gość'}>

                    {this.props.session.data.id === 'guest' ? null :
                      <LinkContainer to={'/user/' + this.props.session.data.userId}>
                        <NavItem eventKey={4.1}>Mój profil</NavItem>
                      </LinkContainer>
                    }
                      <NavItem
                        onClick={(event) => {
                          event.preventDefault()
                          this.setState({username: '', password: ''})
                          this.props.endSessionHelper(this.props.session.data.id)
                        }}
                        eventKey={4.2}>Wyloguj mnie</NavItem>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {this.props.children}
          </div>
        )
    }
  }
)
