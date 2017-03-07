import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import QueryButton from './movies-search'
import { Col, FormGroup, InputGroup, FormControl } from 'react-bootstrap'

class SearchBar extends React.Component {

  hideHints() {
    document.getElementById('hints').style.display = 'none'
  }

  showHints() {
    document.getElementById('hints').style.display = 'block'
  }

  render() {
    const {fieldValue, createQuery, movies} = this.props

    return (
      <Col xs={8} xsOffset={2} className="movies-position-hints">
        <FormGroup className="movies-stick-hints">
          <InputGroup>
            <FormControl
              id="search"
              type="text"
              value={fieldValue}
              onChange={(event) => createQuery(event.target.value)}
              onBlur={this.hideHints}
              onKeyDown={this.showHints}
              placeholder="wyszukaj"
            />

            <InputGroup.Button>
              <QueryButton />
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <ul id="hints" className="movies-search-hints">
          {movies
            .filter(movie =>
              fieldValue.length > 1 ? movie.name.toLowerCase().indexOf(fieldValue.toLowerCase()) !== -1 : false
            )
            .slice(0, 10)
            .map(movie =>
              <li key={movie.id}>
                <Link to={'/movie/' + movie.id}>{movie.name}</Link>
              </li>
            )
          }
        </ul>
      </Col>
    )
  }
}

export default connect(
  state => ({
    fieldValue: state.movies.query,
    movies: state.movies.moviesData
  }),
  dispatch => ({
    createQuery: (value) => dispatch({ type: 'movies/search/QUERY', value })
  })
)(SearchBar)
