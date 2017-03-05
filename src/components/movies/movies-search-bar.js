import React from 'react'
import { connect } from 'react-redux'
import { Col, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap'

const SearchBar = ({ fieldValue, sendQuery }) => (
  <Col xs={8} xsOffset={2}>
    <FormGroup>
      <InputGroup>
        <FormControl
          type="text"
          value={fieldValue}
          onChange={(event) => sendQuery(event.target.value)}
          placeholder="wyszukaj"
        />

        <InputGroup.Button>
          <Button type="button">Wyszukaj</Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
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
