import React from 'react'
import { connect } from 'react-redux'
import QueryButton from './movies-search'
import { Col, FormGroup, InputGroup, FormControl } from 'react-bootstrap'

const SearchBar = ({ fieldValue, createQuery }) => (
  <Col xs={8} xsOffset={2}>
    <FormGroup>
      <InputGroup>
        <FormControl
          type="text"
          value={fieldValue}
          onChange={(event) => createQuery(event.target.value)}
          placeholder="wyszukaj"
        />

        <InputGroup.Button>
          <QueryButton />
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
    createQuery: (value) => dispatch({ type: 'movies/search/QUERY', value })
  })
)(SearchBar)
