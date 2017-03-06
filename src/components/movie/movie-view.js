import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import MovieSearch from './movie-search'
import MovieCarousel from './movie-carousel'
import MovieDescription from './movie-description'
import UserList from './movie-user-list'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {connect} from 'react-redux'


const MovieView = (props) => {
  const id = props.params.movieId
  return (


    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <MovieSearch/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <h2>Tytuł filmu: </h2>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={12} md={6}>
          <MovieCarousel />
        </Col>
        <Col xs={6} md={6}>
          <h2>Tytuł filmu</h2>
          <MovieDescription id={id}/>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col md={12}>
          <h2>Lista użytkowników, ktorzy mają ten film i chętnie umówią się na wspólny seans:</h2>
          <table>
            <tbody>
            <UserList/>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <h2>Footer</h2>
        </Col></Row>
    </Grid>
  );
}

export default connect (
  state => ({
    movieImport: state.movie.movieData
  })
)(MovieView)