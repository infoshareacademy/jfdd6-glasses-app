import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'

import HomeCalendar from './home-calendar'
import HomePostal from './home-postal'
import HomeSlider from './home-slider'
import HomeUpcomingEvents from './home-upcoming-events'

const HomeView = () => (
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
      <Col xs={8}>
        <HomeCalendar/>
      </Col>
      <Col xs={4}>
        <HomeUpcomingEvents/>
      </Col>
    </Row>
  </Grid>
);

export default HomeView