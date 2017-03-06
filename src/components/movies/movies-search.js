import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

const QueryButton = ({ query, movies, sendResult }) => (
  <Button
    type="button"
    onClick={ () => sendResult(movies.filter(movie => movie.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)) }
  >
    Wyszukaj
  </Button>
  )

export default connect(
  state => ({
    query: state.movies.query,
    movies: state.movies.moviesData
  }),
  dispatch => ({
    sendResult: (value) => dispatch({ type: 'movies/search/EXECUTE', value })
  })
)(QueryButton)
