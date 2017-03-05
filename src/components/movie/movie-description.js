import React from 'react'
import movieData from './../../data/movies.json'


const MovieDescription = () => (
  <div>
    {
    movieData.filter(
      movie => movie.description.length < 250
    ).map(
      movie => (
        <p key={movie.id}>{movie.description}</p>
      )
    )
    }
  </div>

)

export default MovieDescription