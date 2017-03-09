import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import QueryButton from './movies-search'
import { Col, FormGroup, InputGroup, FormControl } from 'react-bootstrap'

class SearchBar extends React.Component {

  componentWillUnmount() {
    this.props.createQuery('')
  }

  hideHints() {
    setTimeout( () => document.getElementById('hints').style.display = 'none', 150 )
  }

  showHints() {
    document.getElementById('hints').style.display = 'block'
  }

  render() {
    const {fieldValue, createQuery, movies, tags, filterByTag} = this.props

    return (
      <Col xs={8} xsOffset={2}>
        <div className="movies-position-hints" onBlur={this.hideHints}>
          <FormGroup className="movies-stick-hints">
            <InputGroup>
              <FormControl
                id="search"
                type="text"
                value={fieldValue}
                onChange={(event) => createQuery(event.target.value)}
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
                <li key={movie.id} className="movies-search-hints-titles">
                  <Link to={'/movie/' + movie.id}>{movie.name}</Link>
                </li>
              )
            }
            {tags
              .filter(tag =>
                fieldValue.length > 1 ? tag.name.indexOf(fieldValue.toLowerCase()) !== -1 : false
              )
              .map(tag =>
                <li key={tag.id} className="movies-search-hints-tags">
                  <div onClick={() => filterByTag(movies.filter(movie => movie.tags.indexOf(tag.id) !== -1))}>
                    {tag.name}
                  </div>
                </li>
              )
            }
          </ul>
        </div>
      </Col>
    )
  }
}

export default connect(
  state => ({
    fieldValue: state.movies.query,
    movies: state.movies.moviesData,
    tags: state.movies.tagsList
  }),
  dispatch => ({
    createQuery: (value) => dispatch({ type: 'movies/search/QUERY', value }),
    filterByTag: (value) => dispatch({ type: 'movies/search/EXECUTE', value })
  })
)(SearchBar)
