import React from 'react'
import {connect} from 'react-redux'
import './movie-styles.css';


class MovieDescription extends React.Component {


  render() {
    const { id, movie } = this.props;

    return (
      <div className="movie-description">
        {
          movie.data ? movie.data.filter(
              movie => movie.id === parseInt(id, 10)
            ).map(
              movie => (
                <p key={movie.id}>{movie.description}</p>

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
)(MovieDescription)