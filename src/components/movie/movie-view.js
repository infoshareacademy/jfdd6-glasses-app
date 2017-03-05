import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import movies from '../../data/movies.json'
import MovieCarousel from './movie-carousel'
import MovieDescription from './movie-description'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';





const MovieView = () => (

  <Grid>
    <Row className="show-grid">
      <Col xs={6} md={6}>
      </Col>
      <Col xs={6} md={6}>
    <h2>Film {movies.name}</h2>
      </Col></Row>

    <Row className="show-grid">
      <Col xs={12} md={6}>

<MovieCarousel />

      </Col>
      <Col xs={6} md={6}>
        <MovieDescription />
      </Col>
    </Row>
    <Row className="show-grid">
      <Col md={12}>
        <h2>Lista użytkowników, ktorzy mają ten film i chętnie umówią się na wspólny seans:</h2>
      </Col></Row>

    <Row className="show-grid">

      <Col md={12}>

        <table>
          <tbody>
          <tr>
            {
              movies.filter(
                movie => movie.id < 5
              ).map(
                movie => (
                  <td key={movie.id}><img src={movie.poster} alt="" /></td>
                )
              )
            }

          </tr>
          </tbody></table>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={6} md={6}>
      </Col>
      <Col xs={6} md={6}>
        <h2>Footer</h2>
      </Col></Row>
  </Grid>

);

export default MovieView