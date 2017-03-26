import React from 'react'
import {Table} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class UserEventList extends React.Component {
  render() {
    const {id, type, users, moviesList, user, events} = this.props
    if (users.data === null) {
      return <p>Waiting for user data…</p>
    }
    if (moviesList.data === null) {
      return <p>Waiting for user data…</p>
    }
    const filteredUser = users.data.find(user => user.id === parseInt(id, 10))

    return (
      <div className="profile-container black-background">
        {user !== null && user.id === filteredUser.id
          ?
          type === "host" ?
            <h3>Gospodarz projekcji</h3>
            :
            <h3>Gość projekcji</h3>
          :
          <h3>Projekcje użytkownika <span className="name"> {filteredUser.username}</span></h3>
        }
        <Table className="film-table">
          <tbody>
          {
            events.data ? events.data.filter(event =>
                type === "host"
                  ?
                  event.host === filteredUser.id
                  :
                  event.guests.includes(parseInt(filteredUser.id, 10))
              ).map(event =>
                Object.assign({}, event, {
                  title: (moviesList.data.find(movie => movie.id === event.movieId)).name
                })
              ).map(event =>
                <tr key={event.id}>
                  <td><Link to={'/event/' + event.id}>{event.title} ({event.start.substring(0, 10)})</Link></td>
                </tr>
              )
              :
              <tr>
                <td>Chwilowy brak danych A</td>
              </tr>
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
    user: state.userLogin.data,
    events: state.eventsFetch
  }),
  dispatch => ({ })
)(UserEventList)