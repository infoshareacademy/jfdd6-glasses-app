import React from 'react'
import {Grid, Table} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const UserFilmList = ({id, users, moviesList}) => {

  const filteredUser = users.find(user => user.id === parseInt(id, 10))

  return (
    <Grid>
      <h3>Lista filmów użytkownika: {filteredUser.login}</h3>
      <Table striped>
        <thead>
        <tr>
          <th>Jakie ma filmy</th>
        </tr>
        </thead>
        <tbody>
        {
          moviesList.filter(
            title => filteredUser.movies.indexOf(title.id) !== -1
          ).map(
            userTitle => <tr key={userTitle.id}>
              <td><Link to={'/movie/' + userTitle.id}>{userTitle.name}</Link></td>
            </tr>
          )
        }
        </tbody>
      </Table>
    </Grid>
  )
}

export default connect(
  state => ({
    users: state.user.userData,
    moviesList: state.movies.moviesData
  })
)(UserFilmList)