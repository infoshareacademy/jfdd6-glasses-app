import React from 'react'
import {Row, Col} from 'react-bootstrap'

import './movies-style.css'

const Tags = () => (
  <Col xs={10} xsOffset={1}>
    <Row>
      <Col className="movies-tags movies-border">
        tags
      </Col>
    </Row>
  </Col>
)

export default Tags