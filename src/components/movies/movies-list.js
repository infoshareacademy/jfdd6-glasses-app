import React from 'react'
import {Grid, Table} from 'react-bootstrap'
import movies from '../../data/movies.json'

const MovieList= () => {
  console.log(movies)
  return (
    <Grid>
      <Table bordered>
        <tbody>
        {movies.map(movie => (
          <tr key={movie.id}>
            <td><img src={movie.poster} alt={movie.name} /></td>
            <td>{movie.name}</td>
          </tr>
        ))}

        </tbody>
      </Table>
    </Grid>
  )
}


export default MovieList