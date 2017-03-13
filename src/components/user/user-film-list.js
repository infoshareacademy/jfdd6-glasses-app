import React from 'react'
import {Grid, Table} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router'


class UserFilmList extends React.Component {
  render() {
    const {id, users, moviesList} = this.props
    if (users.data === null) {
      return <p>Waiting for user data…</p>
    }
    if (moviesList.data === null) {
      return <p>Waiting for user data…</p>
    }
    const filteredUser = users.data.find(user => user.id === parseInt(id, 10))

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
            moviesList.data ? moviesList.data.filter(
              title => filteredUser.movies.indexOf(title.id) !== -1
            ).map(
              userTitle => <tr key={userTitle.id}>
                <td><Link to={'/movie/' + userTitle.id}>{userTitle.name}</Link></td>
              </tr>
            )
             :
              <td>Chwilowy brak danych</td>
          }
          </tbody>
        </Table>
      </Grid>
    )
  }
}

export default connect(
  state => ({
    users: state.user,
    moviesList: state.movie
  })
)(UserFilmList)