import React from 'react'
import { connect } from 'react-redux'
import SearchBar from './movies-search-bar'
import Tags from './movies-tags'
import MovieList from './movies-list'
import { Grid, Row, Col } from 'react-bootstrap'

import { fetchData } from '../../state/movies'

class MoviesView extends React.Component {
  componentWillMount() {
    this.props.fetchMovies('/data/movies.json')
    this.props.fetchTags('/data/tags.json')
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} className="movies-bottom">
            <SearchBar />
            <Tags />
            <MovieList />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    fetchMovies: (value) => dispatch(fetchData(value)),
    fetchTags: (value) => dispatch(fetchData(value))
  })
)(MoviesView)
