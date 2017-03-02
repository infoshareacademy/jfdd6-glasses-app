import React from 'react'
import {Grid, Row, Col, Carousel} from 'react-bootstrap'
import movies from "./data/movie-data.json"


const MovieView = () => (

  <Grid>
    <Row className="show-grid">
      <Col xs={12} md={6}>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="favicon.ico"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="favicon.ico"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="favicon.ico"/>
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
            movie => movie.opis.length > 30
          ).map(
            movie => (
              <p key={movie.id}>{movie.opis}</p>
            )
          )
        }
      </Col>
    </Row>
    <Row className="show-grid">
      <Col md={6} mdPush={6}>


      </Col>
      <Col md={6} mdPull={6}>

        <table>

          <tr>
            {
              movies.map(
                movie => (
                  <td key={movie.id}>{movie.name}</td>
                )
              )
            }

          </tr>
        </table>
      </Col>
    </Row>
  </Grid>

);

export default MovieView