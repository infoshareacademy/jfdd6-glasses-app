import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const Tags = ({ tags, sendTag }) => (
    <Col xs={10} xsOffset={1}>
      <Row>
        <Col className="movies-tags movies-border">
          {tags.map((tag, index) => (
              <Button
                key={tag.id}
                value={tag.id}
                bsSize="small"
                className="movies-tag-button"
                onClick={() => sendTag(tag.id)}
              >{tag.name}</Button>
            )
          )}
        </Col>
      </Row>
    </Col>
  )

export default connect(
  state => ({
    tags: state.movies.tagsList
  }),
  dispatch => ({
    sendTag: (value) => dispatch({ type: 'movies/TAG', value })
  })
)(Tags)