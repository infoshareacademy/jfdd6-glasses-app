import React from 'react'
import {connect} from 'react-redux'


class MovieTitleDetails extends React.Component {

  render() {
    const {id, movie} = this.props;
    return (
      <div className="movie-title">
        {
          movie.data ? movie.data.filter(
              movie => movie.id === parseInt(id, 10)
            ).map(
              movie => (<div key="0" className="title-details">
                  <span className="movie-original-title">Rok ekranizacji: {movie.year}</span>
                    <br/> <span className="movie-original-title" >Reżyser: {movie.director}</span>
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
)(MovieTitleDetails)