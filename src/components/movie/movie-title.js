import React from 'react'
import {connect} from 'react-redux'

class MovieTitle extends React.Component {

  render() {
    const { id, movie } = this.props;
    return (
      <div>
        {
          movie.data? movie.data.filter(
              movie => movie.id === parseInt(id, 10)
            ).map(
              movie => (
                <h2 key={movie.id}>{movie.name}</h2>
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