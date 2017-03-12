import React from 'react'
import {connect} from 'react-redux'

import {Col, Grid, Row} from 'react-bootstrap'

import HomeCalendar from './home-calendar'
import HomeLocation from './home-location'
import HomeSlider from './home-slider'
import HomeUpcomingEvents from './home-events'

import {fetchData} from '../../state/home'

class HomeView extends React.Component {

  componentWillMount() {
    this.props.fetchData()
  }

  render() {
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
            <HomeCalendar/>
          </Col>
          <Col xs={12} md={4}>
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
    fetchData: () => dispatch(fetchData())
  })
)(HomeView)