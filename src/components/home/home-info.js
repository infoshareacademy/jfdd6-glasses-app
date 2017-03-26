import React from 'react'
import { Row, Col } from 'react-bootstrap'

const HomeInfo = (props) => (
  <Row className={props.classRow}>
    <Col xs={12}>
      <h3 className={props.classH3}>
        {props.title}
      </h3>
      <h4 className={props.classH4}>
        {props.description}
      </h4>
    </Col>
  </Row>
)

export default HomeInfo