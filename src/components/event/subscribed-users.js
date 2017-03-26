import React from 'react'
import {connect} from 'react-redux'
import {Button, Table} from 'react-bootstrap'
import {addUser} from '../../state/event'

class SubscribedUsers extends React.Component {
  render() {
    const {events, id, user, session, addUser} = this.props
    let userSessionToken, userSessionId, thisEvent
    if (session.data) {
      userSessionToken = session.data.id
      userSessionId = session.data.userId
    } else {
      userSessionId = userSessionToken = 'Ładowanie danych'
    }
    if (events.data) {
      thisEvent = events.data.find(event => event.id === parseInt(id, 10))
    }

    return (

      <div className="profile-container-event">
        <h2>Zapisani użytkownicy:</h2>
        <Table className="film-table table table-bordered">
          <thead>
          <tr>
            <th>Avatar</th>
            <th>Imię</th>
            <th><Button onClick={(event) => {
              event.preventDefault()
              if (userSessionToken === 'guest') {
                alert('Zaloguj się, aby zapisać się na projekcję.')
              } else {
                const guests = thisEvent.guests.includes(userSessionId) ?
                  thisEvent.guests.filter(delUser => delUser !== userSessionId) :
                  thisEvent.guests.concat(userSessionId)
                return (addUser(id, userSessionId, userSessionToken, guests))
              }
            }}>
              {events.data ?
                thisEvent.guests.includes(userSessionId) ? 'Wypisz się' : 'Zgłoś się'
                : null}
            </Button></th>
          </tr>
          </thead>
          <tbody>
          {
            events.data ?
              thisEvent.guests ? thisEvent.guests.map((guest, index) =>
                  <tr key={index}>
                    <td>
                      {user.data ? user.data.filter(
                          person => person.id === guest).map(
                          person => <img src={person.avatar} key={guest} alt={guest}/>
                        ) : 'oczekiwanie na dane'}
                    </td>
                    <td>
                      {user.data ? user.data.filter(
                          person => person.id === guest).map(
                          person => <p key={index + 10}>{person.username}</p>
                        ) : 'oczekiwanie na dane'}
                    </td>
                    <td>
                    </td >
                  </tr>) : 'oczekiwanie na dane'
              :
              <tr>
                <td>Brak zgłoszeń</td>
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
    user: state.user,
    session: state.session,
    events: state.eventsFetch
  }),
  dispatch => ({
    addUser: (id, userSessionId, userSessionToken, guests) => dispatch(addUser(id, userSessionId, userSessionToken, guests)),
  })
)(SubscribedUsers)