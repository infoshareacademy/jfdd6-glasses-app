import React from 'react'
import { connect } from 'react-redux'
import {Col, FormControl} from 'react-bootstrap'

const SearchBar = ({ fieldValue, sendQuery }) => (
  <Col xs={8} xsOffset={2}>
    <form>
      <FormControl
        type="text"
        value={fieldValue}
        onChange={(event) => sendQuery(event.target.value)}
        placeholder="wyszukaj" />
    </form>
  </Col>
)

export default connect(
  state => ({
    fieldValue: state.movies.query
  }),
  dispatch => ({
    sendQuery: (value) => dispatch({ type: 'movies/search/QUERY', value })
  })
)(SearchBar)
