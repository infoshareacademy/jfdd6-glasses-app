import React from 'react'
import connect from 'react-redux'

import { Col, Grid, Row } from 'react-bootstrap'

import HomeCalendar from './home-calendar'
import HomePostal from './home-postal'
import HomeSlider from './home-slider'
import HomeUpcomingEvents from './home-upcoming-events'

import { fetchEvents } from '../../state/home'

class HomeView extends React.Component {

  componentWillMount() {
    this.props.fetchEventsHelper()
  }

  render(){
    return(
      <Grid>
        <Row>
          <Col xs={8}>
            <HomeSlider />
          </Col>
          <Col xs={4}>
            <HomePostal/>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <HomeCalendar/>
          </Col>
          <Col xs={6}>
            <HomeUpcomingEvents/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    fetchEventsHelper: () => dispatch(fetchEvents())
  })
)(HomeView)