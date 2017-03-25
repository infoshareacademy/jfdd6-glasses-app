import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import MovieCarousel from './movie-carousel'
import MovieDescription from './movie-description'
import MovieTitle from './movie-title'
import MovieTitleDetails from './movie-title-details'
import UserList from './movie-user-list'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {fetchMovie} from '../../state/movie'
import {fetchUsers} from '../../state/user'
import {addEvent} from '../../state/add-event'
import moment from 'moment'
moment.locale('pl')

export default connect(
  state => ({
    session: state.session,
  }),
  dispatch => ({
    fetchMovie: () => dispatch(fetchMovie()),
    fetchUsers: () => dispatch(fetchUsers()),
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
      this.props.fetchMovie();
      this.props.fetchUsers();
    }

  componentDidUpdate() {

  }

    render() {
      const {addEvent, session} = this.props;
      const id = this.props.params.movieId;
      const userSessionId = session.data.userId;
      const userSessionToken = session.data.id;
      const valueData = moment(this.state.eventDate).format('YYYY-MM-DD');
      const valueTime = this.state.eventTime;
      const desc = this.state.eventDescription;

      console.log(valueData,valueTime, userSessionId, desc, this.state.className, userSessionToken );
      return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4} mdOffset={1}>
              <MovieCarousel id={id}/>
              <div className="movie-center title">
                <Button className="addEvent-button"
                  onClick={() => this.state.className === 'hide' ?
                    this.setState({className: 'show'}) :
                    this.setState({className: 'hide'}) }>
                  Zoorganizuj projekcję:
                </Button>
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
                <input type="time"
                       value={this.state.eventTime}
                       onChange={(event) => this.setState({eventTime: event.target.value})}/>
                <input type="date" placeholder="Enter text" label="sdfsadfasdfasdfa" className="login"
                       value={this.state.eventDate}
                       onChange={(event) => this.setState({eventDate: event.target.value})}/>
                <p>Krótki opis wydarzenia:</p>
                <input type="text" placeholder="Enter text" label="Text" className="login"
                       value={this.state.eventDescription}
                       onChange={(event) => this.setState({eventDescription: event.target.value})}/>
                <Button onClick={(event) => {
                  event.preventDefault();
                  return addEvent(id, userSessionId, valueData, valueTime, desc, userSessionToken);}}>Zapisz</Button>
              </form>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={9} mdOffset={1}>
              <div className="movie-user-list">
                <h4>Obejrzyj ten film z sąsiadem !! Zobacz kto ma go już w swojej
                  kolekcji: </h4>
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