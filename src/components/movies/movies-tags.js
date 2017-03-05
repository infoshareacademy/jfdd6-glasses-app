import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import tags from '../../data/tags.json'

const Tags = () => (
  <Col xs={10} xsOffset={1}>
    <Row>
      <Col className="movies-tags movies-border">
        {tags.map((tag, index) => (
          <Button key={tag.id} bsSize="small" className="movies-tag-button">{tag.name}</Button>
          )
        )}
      </Col>
    </Row>
  </Col>
)

export default Tags