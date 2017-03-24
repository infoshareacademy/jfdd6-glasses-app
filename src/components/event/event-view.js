import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import MovieTitle from '../movie/movie-title'
import MovieDescription from '../movie/movie-description'
import {fetchMovie} from '../../state/movie'
import {fetchUsers} from '../../state/user'
import {fetchreadEvent} from '../../state/add-event'
import EventUserProfile from './event-user-profile'
import SubscribedUsers from './subscribed-users'


class EventView extends React.Component {
  componentWillMount() {
    this.props.fetchMovie();
    this.props.fetchUsers();
    this.props.fetchreadEvent()
  }

  render() {
    const id = this.props.params.eventId;
    const { movie, events} = this.props;
const movieIde = (events.data ? events.data.filter(
        event => event.id === +id
      ).map(
        (event) => event.movieId): 0);
    const userIde = (events.data ? events.data.filter(
        event => event.id === +id
      ).map(
        (event) => event.host): 0);
    return (
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={1}>
            <div className="event-movie-img">

              {
                movie.data ? movie.data.filter(
                    movie => movie.id === movieIde[0]
                  ).map(
                    (movie, index) => (
                      <img className="movie-img" alt={movie.name + ' poster'} src={movie.pics[0]} key={movie.id}/>

                    )
                  ) : <img className="movie-img" alt={movie.name + ' poster'} src="http://lorempixel.com/320/440/sports/" key={movie.id + 1}/>
              }

            </div>
          </Col>
          <Col xs={12} md={6}>
            <MovieTitle id={movieIde[0]}/>
            <MovieDescription id={movieIde[0]}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <EventUserProfile id={userIde} />
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