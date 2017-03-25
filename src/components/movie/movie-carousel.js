import React from 'react'
import {Carousel} from 'react-bootstrap'
import {connect} from 'react-redux'


class MovieCarousel extends React.Component {
  render() {
    const {id, movie} = this.props;

    return (
      <Carousel>
        <Carousel.Item>
          {
            movie.data ? movie.data.filter(
                movie => movie.id === parseInt(id, 10)
              ).map(
                movie => (
                  <img className="movie-img" alt={movie.name + ' poster'} src={movie.pics[0]} key={movie.id}/>
                )
              ) : <img className="movie-img" alt={movie.name + ' poster'} src="http://pipsum.com/320x440.jpg"/>
          }
          <Carousel.Caption>
            {/*<h3>First slide label</h3>*/}
            {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {
            movie.data ? movie.data.filter(
                movie => movie.id === parseInt(id, 10)
              ).map(
                movie => (
                  <img className="movie-img" alt={movie.name + ' poster'} src={movie.pics[1]} key={movie.id}/>

                )
              ) : <img className="movie-img" alt={movie.name + ' poster'} src="http://lorempixel.com/320/440/sports/"/>
          }
          <Carousel.Caption>
            {/*<h3>Second slide label</h3>*/}
            {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
  }
}

export default connect(
  state => ({
    movie: state.movie
  })
)(MovieCarousel)