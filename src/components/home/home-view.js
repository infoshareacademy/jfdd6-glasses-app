import React from 'react'
import {connect} from 'react-redux'

import {Col, Grid, Row} from 'react-bootstrap'

import HomeCalendar from './home-calendar'
import HomeLocation from './home-location'
import HomeSlider from './home-slider'
import HomeEvents from './home-events'

import {fetchData} from '../../state/home'

class HomeView extends React.Component {

  componentWillMount() {
    this.props.fetchData()
  }

  render() {
    const { events } = this.props
    // Mapping events starts here.
    // When finished pass event instead of events!
    // const eventsFiltered = events ?
    //   events.slice().filter(
    //     event =>
    //       moment( event.start ) >= moment() &&
    //         event.dist < range
    //   ).sort(
    //     ( prev, next ) =>
    //       moment( prev.start ) - moment( next.start ))
    //     .slice(
    //       start, start + step
    //     ).map(
    //       event => event) : null

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
            <HomeCalendar events={ events }/>
          </Col>
          <Col xs={12} md={4}>
            <HomeEvents events={ events }/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(
  state => ({
    events: state.home.data
  }),
  dispatch => ({
    fetchData: () => dispatch(fetchData())
  })
)(HomeView)

HomeView.propTypes = {
  fetchData: React.PropTypes.func.isRequired,
}