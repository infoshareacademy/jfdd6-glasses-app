import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import QueryButton from './movies-search-button'
import { Row, Col, FormControl } from 'react-bootstrap'

class SearchBar extends React.Component {

  componentDidMount() {
    document.addEventListener('click', this.hideHints)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hideHints)
    this.props.createQuery('')
  }

  hideHints() {
    if (document.querySelectorAll('.movies-search-hints li').length > 0) {
      document.getElementById('hints').style.display = 'none'
    }
  }

  hideHintsOnEnterKey() {
    document.getElementById('hints').style.display = 'none'
  }

  showHints() {
    document.getElementById('hints').style.display = 'block'
  }

  render() {
    const {fieldValue, createQuery, movies, tags, activateTagQuery} = this.props

    return (
      <Row className="no-top-margin">
        <Col xs={12} sm={6} smOffset={2} className="no-right-padding">
          <div className="movies-position-hints">
            <div className="movies-stick-hints">
              <FormControl
                id="search"
                type="text"
                className="search-group-input"
                value={fieldValue}
                onChange={(event) => createQuery(event.target.value)}
                onKeyDown={this.showHints}
                placeholder="wyszukaj"
              />
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
                      <div
                        tabIndex="0"
                        onClick={() => activateTagQuery(tag.id, tag.name)}
                        onKeyUp={ (event) => {
                          if (event.keyCode === 13) {
                            this.hideHintsOnEnterKey();
                            activateTagQuery(tag.id, tag.name);
                          }
                        }}
                      >
                        {tag.name}
                      </div>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={2} className="align-search-button">
          <QueryButton />
        </Col>
      </Row>
    )
  }
}

export default connect(
  state => ({
    fieldValue: state.moviesFilters.staticQuery,
    movies: state.movies.moviesData,
    tags: state.movies.tagsList
  }),
  dispatch => ({
    createQuery: (value) => dispatch({ type: 'movies/search/QUERY', value }),
    activateTagQuery: (tagId, tagName) => dispatch({ type: 'movies/search/EXECUTE_HINT', tagId, tagName })
  })
)(SearchBar)
