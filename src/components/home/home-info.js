import React from 'react'
import { Row, Col } from 'react-bootstrap'

const HomeInfo = (props) => (
  <Row className={props.classRow}>
    <Col xs={12}>
      <h4 className={props.classH4}>
        {props.title}
      </h4>
      <h5 className={props.classH5}>
        {props.description}
      </h5>
    </Col>
  </Row>
)

export default HomeInfo