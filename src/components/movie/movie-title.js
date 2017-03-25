import React from 'react'
import {connect} from 'react-redux'


class MovieTitle extends React.Component {

  render() {
    const {id, movie} = this.props;
    return (
      <div className="movie-title">
        {
          movie.data ? movie.data.filter(
              movie => movie.id === parseInt(id, 10)
            ).map(
              movie => (<div key="0">
                  <h2 className="title" key="1">{movie.originalTitle}
                    <br/><span className="movie-original-title" key="2">( {movie.name} )</span>
                    <br/><span className="movie-original-title">Rok ekranizacji: {movie.year}</span>
                    <br/> <span className="movie-original-title" >Reżyser: {movie.director}</span></h2>
                </div>
              )
            ) : <p>brak danych</p>
        }
      </div>

    )
  }
}

export default connect(
  state => ({
    movie: state.movie
  })
)(MovieTitle)