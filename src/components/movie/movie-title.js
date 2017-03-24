import React from 'react'
import {connect} from 'react-redux'


class MovieTitle extends React.Component {

  render() {
    const { id, movie } = this.props;
    return (
      <div className="movie-title">
        {
          movie.data? movie.data.filter(
              movie => movie.id === parseInt(id, 10)
            ).map(
              movie => (<div key="0">
                <h2 className="title" key="1">{movie.originalTitle}
                <p className="" key="2">{movie.name}</p></h2>
                  <h6>Rok produkcji: {movie.year}</h6>
                  <h6>Reżyser: {movie.director}</h6>
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