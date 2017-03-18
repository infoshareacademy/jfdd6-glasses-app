import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { Col, Grid, Row } from 'react-bootstrap'

import HomeCalendar from './home-calendar'
import HomeLocation from './home-location'
import HomeSlider from './home-slider'
import HomeEvents from './home-events'

import { fetchData } from '../../state/home-fetch'

class HomeView extends React.Component {

  componentWillMount() {
    this.props.fetchData()
  }

  render() {
    const { events, range, userLocation } = this.props
    const userLattitude = userLocation[0].geometry.location.lat;
    const userLongitude = userLocation[0].geometry.location.lng;

    const eventsFiltered = events ?
      events.map(event => {
        return Object.assign({}, event, {
          distance: Math.round((Math.sqrt(
                Math.pow((event.location.lat - userLattitude), 2) +
                Math.pow((Math.cos(userLattitude * Math.PI / 180) *
                (event.location.lng - userLongitude)), 2))
              * (40075.704 / 360)
            ) * 1000)
        })
      }).filter(
        (event, index) =>
        moment(event.start) >= moment() && event.distance < range
      ).sort(
        (prev, next) =>
        moment(prev.start) - moment(next.start)) : null

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
        <Row>
          <Col xs={12} md={8}>
            <HomeCalendar events={ eventsFiltered } router={this.props.router}/>
          </Col>
          <Col xs={12} md={4}>
            <HomeEvents events={ eventsFiltered }/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(
  state => ({
    events: state.homeFetch.data,
    range: state.homeFilters.value,
    userLocation: state.homeLocation.data.results
  }),
  dispatch => ({
    fetchData: () => dispatch(fetchData())
  })
)(HomeView)

HomeView.propTypes = {
  fetchData: React.PropTypes.func.isRequired,
}