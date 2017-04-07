import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { Col, Grid, Row } from 'react-bootstrap'

import HomeCalendar from './home-calendar'
import HomeLocation from './home-location'
import HomeSlider from './home-slider'
import HomeEvents from './home-events'

import { fetchData } from '../../state/events'
import { fetchMovie } from '../../state/movie'

class HomeView extends React.Component {

  componentWillMount() {
    this.props.fetchData()
    this.props.fetchMovie()
  }

  render() {
    const { events, range, userLocation, movies } = this.props
    const userLatitude = userLocation[0].geometry.location.lat;
    const userLongitude = userLocation[0].geometry.location.lng;

    const eventsFiltered = events ?
      events.map(event => {
        return Object.assign({}, event, {
          distance: Math.round((Math.sqrt(
                Math.pow((event.location.lat - userLatitude), 2) +
                Math.pow((Math.cos(userLatitude * Math.PI / 180) *
                (event.location.lng - userLongitude)), 2))
              * (40075.704 / 360)
            ) * 1000),
          movieTitle: (movies.find(movie => {
            return event.movieId === movie.id
          }) || {name: 'Movie without a title.'}).name,
          moviePicture: (movies.find(movie => {
            return parseInt(event.movieId, 10) === movie.id
          })).pics[0],
          start: moment(event.start).format('YYYY-MM-DD H:mm')
        })
      }).filter(
        (event, index) =>
        moment(event.start) >= moment() && event.distance < range
      ).sort(
        (prev, next) =>
        moment(prev.start) - moment(next.start)
      ) : null

    return (
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <HomeLocation/>
          </Col>
          <Col xs={12} md={6}>
            <HomeSlider />
          </Col>
        </Row>
        <p className="text-center home-user-location">
          Wybrana lokalizacja to: {userLocation[0].formatted_address}
        </p>
        <hr className="home-ruller" />
        <Row>
          <Col xs={12} md={7}>
            <HomeCalendar events={ eventsFiltered } router={this.props.router}/>
          </Col>
          <Col xs={12} md={5}>
            <HomeEvents events={ eventsFiltered }/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(
  state => ({
    events: state.events.data,
    range: state.eventsFilters.value,
    userLocation: state.userLocation.data.results,
    movies: state.movie.data
  }),
  dispatch => ({
    fetchData: () => dispatch(fetchData()),
    fetchMovie: () => dispatch(fetchMovie())
  })
)(HomeView)

HomeView.propTypes = {
  fetchData: React.PropTypes.func.isRequired,
}