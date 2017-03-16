import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'

const Tags = ({ tags, customTags, sendTag, removeTag, resetTags}) => {
  // console.log(customTags)
  return (
    <Col xs={10} xsOffset={1}>
      <Row>
        <Col className="movies-tags movies-border">
          {
            tags.length === 0
              ? <p>Ładowanie&hellip;</p>
              :
              tags.map((tag) => (
                  customTags.indexOf(tag.id) === -1
                    ? <Button
                      key={tag.id}
                      value={tag.id}
                      bsSize="small"
                      className="movies-tag-button"
                      onClick={() => sendTag(tag.id)}
                    >{tag.id} {tag.name}</Button>
                    : <Button
                      key={tag.id}
                      value={tag.id}
                      bsStyle="success"
                      bsSize="small"
                      className="movies-tag-button"
                      onClick={() => removeTag(tag.id)}
                    >{tag.id} {tag.name}</Button>
                )
              )
          }
          <Button
            bsStyle="warning"
            className="movies-tag-button"
            onClick={() => resetTags()}
          >Usuń filtry</Button>
        </Col>
      </Row>
    </Col>
  )
}

export default connect(
  state => ({
    tags: state.movies.tagsList,
    customTags: state.moviesFilters.customTags
  }),
  dispatch => ({
    sendTag: (value) => dispatch({ type: 'movies/tags/CUSTOM', value }),
    removeTag: (value) => dispatch({ type: 'movies/tags/REMOVE', value }),
    resetTags: () => dispatch({ type: 'movies/tags/RESET' })
  })
)(Tags)