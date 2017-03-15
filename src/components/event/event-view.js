import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'

const EventView = (props) => (
  <Grid>
    <Row>
      <Col xs={12} md={6}>
        Moduł1
      </Col>
      <Col xs={12} md={6}>
        Moduł2
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        Moduł3
      </Col>
      <Col xs={12} md={6}>
        Moduł4
      </Col>
    </Row>
  </Grid>
);

export default EventView