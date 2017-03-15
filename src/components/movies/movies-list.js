import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Row, Col, Table } from 'react-bootstrap'

const MovieList = ({movies, customTags, query, queryTag}) => (
  <Row>
    <Col xs={10} xsOffset={1}>
      <Table bordered striped className="movies-list">
        <tbody>
        {
          movies.length === 0
            ?
            <tr>
              <td>Ładowanie&hellip;</td>
            </tr>
            :
            movies
              .filter(movie =>
                movie.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
              )
              .filter(movie =>
                queryTag > 0 ? movie.tags.indexOf(queryTag) !== -1 : true
              )
              .filter(movie =>
                customTags.every(tag =>
                  movie.tags.indexOf(tag) !== -1
                )
              )
              .map(movie => (
                  <tr key={movie.id}>
                    <td><img src={movie.poster} alt={movie.name}/></td>
                    <td>
                      <Link to={'/movie/' + movie.id}>
                        {movie.name}
                      </Link>
                    </td>
                  </tr>
                )
              )
        }
        </tbody>
      </Table>
    </Col>
  </Row>
)

export default connect(
  state => ({
    movies: state.movies.moviesData,
    customTags: state.moviesFilters.customTags,
    query: state.moviesFilters.query,
    queryTag: state.moviesFilters.queryTag
  })
)(MovieList)

