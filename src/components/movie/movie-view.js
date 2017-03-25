import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Grid, Row, Col, Button} from 'react-bootstrap'
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
    events: state.eventsFetch.data
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
      const {addEvent, events, session} = this.props
      const id = this.props.params.movieId
      const userSessionId = session.data.userId
      const userSessionToken = session.data.id
      const valueData = moment(this.state.eventDate).format('YYYY-MM-DD')
      const valueTime = this.state.eventTime
      const desc = this.state.eventDescription

      console.log(valueData,valueTime, userSessionId, desc, this.state.className, userSessionToken )
      return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4} mdOffset={1}>
              <MovieCarousel id={id}/>
              <div className="movie-center title">
                <Button bsStyle="info" className="addEvent-button"
                  onClick={() => this.state.className === 'hide' ?
                    this.setState({className: 'show'}) :
                    this.setState({className: 'hide'}) }>
                  Zorganizuj projekcję
                </Button>
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
                  return addEvent(id, userSessionId, valueData, valueTime, desc, userSessionToken);}}>Zapisz</Button>
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