import React from 'react'
import {connect} from 'react-redux'

const MovieDescription = ({movieImport, id}) => {

  console.log(movieImport);
  console.log(id);
  return (
  <div>
    {
      movieImport.filter(
      movie => movie.id === parseInt(id, 10)
    ).map(
      movie => (
        <p key={movie.id}>{movie.description}</p>
      )
    )
    }
  </div>

)}

export default connect (
  state => ({
movieImport: state.movie.movieData
  }),
)(MovieDescription)