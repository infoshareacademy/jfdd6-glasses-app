import React from 'react'
import {connect} from 'react-redux'

const MovieDescription = ({movieImport}) => {
  console.log(movieImport);
  return (
  <div>
    {
      movieImport.filter(
      movie => movie.description.length < 250
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