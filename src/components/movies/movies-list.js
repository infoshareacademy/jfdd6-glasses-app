import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Table } from 'react-bootstrap'

const MovieList = ({ movies, customTags, query }) => (
  <Row>
    <Col xs={10} xsOffset={1}>
      <Table bordered className="movies-list">
        <tbody>
        {movies
          .filter(movie =>
            movie.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
          )
          .filter(movie =>
            customTags.every(tag =>
              movie.tags.indexOf(tag) !== -1
            )
          )
          .map(movie => (
          <tr key={movie.id}>
            <td><img src={movie.poster} alt={movie.name}/></td>
            <td>{movie.name}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Col>
  </Row>
)

export default connect(
  state => ({
    movies: state.movies.moviesData,
    customTags: state.movies.customTags,
    query: state.movies.query
  })
)(MovieList)

