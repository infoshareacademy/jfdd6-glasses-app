import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { Col, Grid, Row } from 'react-bootstrap'

import HomeCalendar from './home-calendar'
import HomeLocation from './home-location'
import HomeSlider from './home-slider'
import HomeEvents from './home-events'

import { fetchData } from '../../state/home'

class HomeView extends React.Component {

  componentWillMount() {
    this.props.fetchData()
  }

  render() {
    const { events, range } = this.props

    const eventsFiltered = events ?
      events.slice().filter(
        event =>
          moment( event.start ) >= moment() &&
            event.dist < range
      ).sort(
        ( prev, next ) =>
          moment( prev.start ) - moment( next.start )) : null

    return (
      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <HomeLocation/>
          </Col>
          <Col xs={12} md={8}>
            <HomeSlider />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <HomeCalendar events={ eventsFiltered }/>
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
    events: state.home.data,
    range: state.range.value
  }),
  dispatch => ({
    fetchData: () => dispatch(fetchData())
  })
)(HomeView)

HomeView.propTypes = {
  fetchData: React.PropTypes.func.isRequired,
}