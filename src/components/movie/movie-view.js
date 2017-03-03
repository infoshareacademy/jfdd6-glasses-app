import React from 'react'
import {Grid, Row, Col, Carousel} from 'react-bootstrap'
import movies from '../../data/movies.json'

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
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://lorempixel.com/900/900/abstract/1"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://lorempixel.com/900/900/abstract/2"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://lorempixel.com/900/900/abstract/3"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


      </Col>
      <Col xs={6} md={6}>

        {
          movies.filter(
            movie => movie.description.length < 250
          ).map(
            movie => (
              <p key={movie.id}>{movie.description}</p>
            )
          )
        }
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
                  <td key={movie.id}><img src={movie.poster} /></td>
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