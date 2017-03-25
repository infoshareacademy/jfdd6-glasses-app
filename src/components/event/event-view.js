import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import MovieTitle from '../movie/movie-title'
import MovieDescription from '../movie/movie-description'
import {fetchMovie} from '../../state/movie'
import {fetchUsers} from '../../state/user'
import {fetchreadEvent} from '../../state/add-event'
// import EventUserProfile from './event-user-profile'
import SubscribedUsers from './subscribed-users'
import moment from 'moment'
moment.locale('pl')

class EventView extends React.Component {
  componentWillMount() {
    this.props.fetchMovie();
    this.props.fetchUsers();
    this.props.fetchreadEvent()
  }

  render() {
    const id = this.props.params.eventId;

    // const host = events.data.filter(event => event == 1? event.host : null);
    const {movie, events} = this.props;
    const movieIde = (events.data ? events.data.filter(
        event => event.id === +id
      ).map(event => event.movieId): 'Waiting for data' );
    console.log(movieIde);
    const eventStart = (events.data ? events.data.filter(
        event => event.id === +id
      ).map(event => event.start).toString(eventStart).slice(0,10): 'Waiting for data' );
    const eventTime = (events.data ? events.data.filter(
        event => event.id === +id
      ).map(event => event.start).toString(eventStart).slice(11,16): 'Waiting for data' );
    console.log(eventTime);
    const eventDesc = (events.data ? events.data.filter(
        event => event.id === +id
      ).map(event => event.desc): 'Waiting for data' );

    //     (event) => event.movieId) : 0);
    // const userIde = (events.data ? events.data.filter(
    //     event => event.id === +id
    //   ).map(
    //     (event) => event.host) : 0);
    return (
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={1}>
            <div className="event-movie-img">

              {
                movie.data ? movie.data.filter(
                    movie => movie.id === parseInt(movieIde)
                  ).map(
                    (movie, index) => (
                      <img className="movie-img" alt={movie.name + ' poster'} src={movie.pics[0]} key={movie.id}/>

                    )
                  ) :
                  <img className="movie-img" alt={movie.name + ' poster'} src="http://lorempixel.com/320/440/sports/"
                       key={movie.id + 1}/>
              }

            </div>
          </Col>
          <Col xs={12} md={6}>
            <h2 className="event-details">Na film</h2>
            <MovieTitle id={movieIde}/>
            <h3 className="event-details">zaprasza <br/>

            </h3>
            <p className="event-details">{eventDesc}</p>

            <h3 className="event-details">projekcja <br/>
              {moment(eventStart +"T"+ eventTime).format('dddd, D MMMM, H:mm')}
            </h3>

          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            {/*<EventUserProfile id={id}/>*/}
            <MovieDescription id={movieIde}/>
          </Col>
          <Col xs={12} md={6}>
            <SubscribedUsers id={id}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(
  state => ({
    movie: state.movie,
    events: state.events
  }),
  dispatch => ({
    fetchMovie: () => dispatch(fetchMovie()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchreadEvent: () => dispatch(fetchreadEvent())
  })
)(EventView)