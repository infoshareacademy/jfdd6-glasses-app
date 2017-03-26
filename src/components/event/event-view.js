import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import MovieTitle from '../movie/movie-title'
import MovieDescription from '../movie/movie-description'
import {fetchMovie} from '../../state/movie'
import {fetchUsers} from '../../state/user'
import {fetchData} from '../../state/home-fetch'
import SubscribedUsers from './subscribed-users'
import moment from 'moment'
moment.locale('pl');

class EventView extends React.Component {
  componentWillMount() {
    this.props.fetchMovie();
    this.props.fetchUsers();
    this.props.fetchEvent()
  }

  render() {
    const id = this.props.params.eventId;
    let movieIde, eventStart, eventTime, eventDesc;

    // const host = events.data.filter(event => event == 1? event.host : null);
    const {movie, events} = this.props;

    if (events.data) {
      movieIde = (events.data.filter(
        event => event.id === +id
      ).map(event => event.movieId));
      eventStart = (events.data.filter(
        event => event.id === +id
      ).map(event => event.start).toString(eventStart).slice(0, 10));
      eventTime = (events.data.filter(
        event => event.id === +id
      ).map(event => event.start).toString(eventStart).slice(11, 16));
      eventDesc = (events.data.filter(
          event => event.id === +id
        ).map(event => event.desc));
    } else {
      movieIde = eventStart = eventTime = eventDesc = 'Ładowanie danych';
    }
    // console.log(movieIde, eventStart, eventTime);


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
                    movie => movie.id === parseInt(movieIde, 10)
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
    events: state.eventsFetch
  }),
  dispatch => ({
    fetchMovie: () => dispatch(fetchMovie()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchEvent: () => dispatch(fetchData())
  })
)(EventView)