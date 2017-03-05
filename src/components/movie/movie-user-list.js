import React from 'react'
import movieData from './../../data/movies.json'

const UserList = () => (
  <tr>
    {
      movieData.filter(
        movie => movie.id < 5
      ).map(
        movie => (
          <td key={movie.id}><img src={movie.poster} alt="" /></td>
        )
      )
    }

  </tr>
)

export default UserList