import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

const QueryButton = ({ query, movies, activateQuery }) => (
  <Button
    type="button"
    className="search-group-button"
    onClick={ () => activateQuery() }
  >
    Wyszukaj
  </Button>
)

export default connect(
  state => ({
    query: state.moviesFilters.query,
    movies: state.movies.moviesData
  }),
  dispatch => ({
    activateQuery: (value) => dispatch({ type: 'movies/search/EXECUTE', value })
  })
)(QueryButton)
