import React from 'react'
import {Carousel} from 'react-bootstrap'
import './movie-styles.css';


const MovieCarousel = () => (

  <Carousel>
    <Carousel.Item>
      <img className="movie-img" alt="900x500" src="https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,704,1000_AL_.jpg"/>
      <Carousel.Caption>
        {/*<h3>First slide label</h3>*/}
        {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="movie-img" alt="900x500" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5Zjg5N2QtYzQ0NS00MDUwLWIxZWQtODYzNTBkY2M3MGYyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg"/>
      <Carousel.Caption>
        {/*<h3>Second slide label</h3>*/}
        {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="movie-img" alt="900x500" src="http://lorempixel.com/900/900/abstract/3"/>
      <Carousel.Caption>
        {/*<h3>Third slide label</h3>*/}
        {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default MovieCarousel