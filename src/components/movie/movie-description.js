import React from 'react'
import {connect} from 'react-redux'
import {fetchMovie} from '../../state/movie'

class MovieDescription extends React.Component {
  // componentWillMount() {
  //   this.props.fetchMovie()
  // }

  render() {
    return (
      <div>
        {/*{*/}
        {/*movieImport.filter(*/}
        {/*movie => movie.id === parseInt(id, 10)*/}
        {/*).map(*/}
        {/*movie => (*/}
        {/*<p key={movie.id}>{movie.description}</p>*/}
        {/*)*/}
        {/*)*/}
        {/*}*/}
      </div>

    )
  }
}

export default connect(
  state => ({
    movies: state.movies
  }),
  dispatch => ({
    fetchMovie: () => dispatch(fetchMovie())
  })
)(MovieDescription)