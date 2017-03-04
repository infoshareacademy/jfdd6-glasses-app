import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import { connect } from 'react-redux'

const MovieList= ({ movies }) => (
  <Row>
    <Col xs={10} xsOffset={1}>
      <Table bordered className="movies-list">
        <tbody>
        {movies.map(movie => (
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
  state => ({ movies: state.movies.moviesData }),
  dispatch => ({  })
)(MovieList)

