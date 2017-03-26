import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Grid, Row, Col, Button, Modal} from 'react-bootstrap'
import MovieCarousel from './movie-carousel'
import MovieDescription from './movie-description'
import MovieTitle from './movie-title'
import MovieTitleDetails from './movie-title-details'
import UserList from './movie-user-list'
import {fetchMovie} from '../../state/movie'
import {fetchUsers} from '../../state/user'
import {fetchData} from '../../state/home-fetch'
import {addEvent} from '../../state/event'
import moment from 'moment'
moment.locale('pl')

export default connect(
  state => ({
    session: state.session,
    events: state.eventsFetch.data,
    user: state.user
  }),
  dispatch => ({
    fetchMovie: () => dispatch(fetchMovie()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchEvents: () => dispatch(fetchData()),
    addEvent: (id, userSessionId, eventDate, eventTime, desc, userSessionToken) => dispatch(addEvent(id, userSessionId, eventDate, eventTime, desc, userSessionToken))
  })
)(class MovieView extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
        className: 'hide',
        eventDescription: '',
        eventDate: '',
        eventTime: '12:00'
      }
    }

    componentWillMount() {
      this.props.fetchMovie()
      this.props.fetchUsers()
      this.props.fetchEvents()
    }

    render() {
      const {addEvent, events, session, user} = this.props
      const id = parseInt(this.props.params.movieId, 10)
      const userSessionId = session.data.userId
      const userSessionToken = session.data.id
      const valueData = moment(this.state.eventDate).format('YYYY-MM-DD')
      const valueTime = this.state.eventTime
      const desc = this.state.eventDescription
      let close = () => this.setState({show: false, showNoMovie: false});
      const MovieHost = user.data ? user.data.filter(user => user.id === userSessionId).map(user => user.movies) : 'ładowanie danych'
      const UserName = user.data ? user.data.filter(user => user.id === userSessionId).map(user => user.username) : 'ładowanie danych'

      console.log(id, MovieHost[0])
      return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4} mdOffset={1}>
              <MovieCarousel id={id}/>
              <div className="movie-center title">
                (
                <div>
                  <Button
                    bsStyle="info"
                    className="addEvent-button"
                    onClick={userSessionToken === 'guest' ?
                      () => this.setState({show: true}) :
                      MovieHost[0].includes(id) ? () =>

                          this.state.className === 'hide' ?
                            this.setState({className: 'show'}) : this.setState({className: 'hide'}) : () => this.setState({showNoMovie: true})
                    }


                  >
                    Zorganizuj pokaz filmu
                  </Button>

                  <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title">Brak uprawnień</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Drogi gościu.
                        <br/><br/>
                        Cieszymy się, iż zainteresowała cię funkcjonalność naszego serwisu. Jednak jako osoba
                        niezalogowana nie masz możliwości tworzenia nowych wydarzeń ani korzystania z wielu
                        funkcjonalności naszej aplikacji.
                        <br/><br/>
                        Załóż konto już dziś i ciesz się pełnią możliwości serwisu.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={close}>Close</Button>
                    </Modal.Footer>
                  </Modal>


                  <Modal
                    show={this.state.showNoMovie}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title">Nie posiadasz tego filmu</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Drogi {UserName}.
                        <br/><br/>
                        Wygląda na to, że nie masz lub nie dodałeś jeszcze tego filmu do swojej kolekcji. Poniżej znajdziesz listę sąsiadów
                        z którymi mógłbyś go obejrzeć.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={close}>Close</Button>
                    </Modal.Footer>
                  </Modal>

                </div>
                );
              </div>
              <div>
                <ul>
                  {events === null ? null :
                    events.filter(
                      ev => ev.movieId === parseInt(id, 10)
                    ).map((ev, index) =>
                      userSessionId === ev.host
                        ?
                        <li key={index}>
                          <Link to={'/event/' + ev.id}>Twoja projekcja ({ev.start.substring(0, 10)})</Link>
                        </li>
                        :
                        <li key={index}>
                          <Link to={'/event/' + ev.id}>Projekcja ({ev.start.substring(0, 10)})</Link>
                        </li>
                    )
                  }
                </ul>
              </div>
            </Col>
            <Col xs={12} md={5} mdOffset={1} mdPull={1}>
              <MovieTitle id={id}/>
              <MovieTitleDetails id={id}/>
              <MovieDescription id={id}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={9} mdOffset={2} mdPull={1}>

              <form action="" id="formM" className={this.state.className}>
                <p>Data projekcji:</p>
                <input type="date" placeholder="Enter text" label="sdfsadfasdfasdfa" className="login"
                       value={this.state.eventDate}
                       onChange={(event) => this.setState({eventDate: event.target.value})}/>
                <input type="time"
                       value={this.state.eventTime}
                       onChange={(event) => this.setState({eventTime: event.target.value})}/>
                <p>Krótki opis wydarzenia:</p>
                <input type="text" placeholder="Enter text" label="Text" className="login"
                       value={this.state.eventDescription}
                       onChange={(event) => this.setState({eventDescription: event.target.value})}/>
                <Button onClick={(event) => {
                  event.preventDefault()
                  this.setState({className: 'hide'})
                  return addEvent(id, userSessionId, valueData, valueTime, desc, userSessionToken);
                }}>Zapisz</Button>
              </form>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={9} mdOffset={1}>
              <div className="movie-user-list">
                <h4>
                  Obejrzyj ten film z sąsiadem!! Zobacz, kto ma go już w swojej kolekcji:
                </h4>
              </div>
              <div id="x"><br/>
                <UserList id={id}/>
              </div>
              <br/>

              <br/>
            </Col>
          </Row>
        </Grid>
      )
    }
  }
)