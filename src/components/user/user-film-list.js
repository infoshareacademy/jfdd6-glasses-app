import React from 'react'
import {Table} from 'react-bootstrap'
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
      <div className="profile-container black-background">
        <h3>Filmy użytkownika <span className="name"> {filteredUser.login}</span></h3>
        <Table className="film-table">
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
      </div>
    )
  }
}

export default connect(
  state => ({
    users: state.user,
    moviesList: state.movie
  })
)(UserFilmList)