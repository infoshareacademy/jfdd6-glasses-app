import React from 'react'
import {Table, Button, Tooltip, OverlayTrigger} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {toggleMovie} from '../../state/userLogin'

class UserFilmList extends React.Component {
  render() {
    const {id, users, moviesList, session, user, toggleMovie} = this.props
    if (users.data === null) {
      return <p>Waiting for user data…</p>
    }
    if (moviesList.data === null) {
      return <p>Waiting for user data…</p>
    }
    const filteredUser = users.data.find(user => user.id === parseInt(id, 10))
    const tooltip = (
      <Tooltip id="tooltip">
        Usuń z listy
      </Tooltip>
    )

    return (
      <div className="profile-container black-background user-main-data">
        <h3>Filmy użytkownika <span className="name"> {filteredUser.username}</span></h3>
        <Table className="film-table">
          <tbody>
          {user !== null && user.id === filteredUser.id
            ?
            moviesList.data ? moviesList.data.filter(
                title => user.movies.indexOf(title.id) !== -1
              ).map(
                userTitle => <tr key={userTitle.id}>
                  <td><Link to={'/movie/' + userTitle.id}>{userTitle.name}</Link></td>
                  <td className="film-table-button">
                    <OverlayTrigger
                      placement="bottom"
                      overlay={tooltip}
                      trigger={['hover']}
                      delay={100}
                    >
                    <Button bsSize="xsmall" onClick={
                      () => toggleMovie(user.id,
                        user.movies.filter(mov => mov !== userTitle.id),
                        session.id)
                    }>–</Button>
                    </OverlayTrigger>
                  </td>
                </tr>
              )
              :
              <td>Chwilowy brak danych</td>
            :
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
    moviesList: state.movie,
    session: state.session.data,
    user: state.userLogin.data
  }),
  dispatch => ({
    toggleMovie: (userId, userMovies, accessToken) => dispatch(toggleMovie(userId, userMovies, accessToken))
  })
)(UserFilmList)