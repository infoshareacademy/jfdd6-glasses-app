import React from 'react'
import {connect} from 'react-redux'
import {Button, Table, Modal} from 'react-bootstrap'
import {addUser} from '../../state/event'

class SubscribedUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

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
    let close = () => this.setState({show: false});
    return (

      <div className="profile-container-event">
        <h2>Zapisani użytkownicy:</h2>
        <Table className="film-table table table-bordered">
          <thead>
          <tr>
            <th>Avatar</th>
            <th>Imię</th>
            <th>
              <Button
                bsStyle="info"
                className="addEvent-button"
                onClick={userSessionToken === 'guest' ?
                  () => this.setState({show: true}) :
                  () => {
                    const guests = thisEvent.guests.includes(userSessionId) ?
                      thisEvent.guests.filter(delUser => delUser !== userSessionId) :
                      thisEvent.guests.concat(userSessionId)
                    return (addUser(id, userSessionId, userSessionToken, guests))
                  }}
              >
                {events.data ?
                  thisEvent.guests.includes(userSessionId) ? 'Wypisz się' : 'Zgłoś się'
                  : null}
              </Button>
               <Modal
                show={this.state.show}
                onHide={close}
                container={this}
                aria-labelledby="contained-modal-title"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title">Brak uprawnień</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Drogi gościu.
                  <br/><br/>
                  Cieszymy się, iż zainteresowała cię funkcjonalność naszego serwisu. Jednak jako osoba niezalogowana nie masz możliwości dopisywania się do istniejących wydarzeń ani korzystania z wielu funkcjonalności naszej aplikacji.
                  <br/><br/>
                  Załóż konto już dziś i ciesz się pełnią możliwości serwisu.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={close}>Close</Button>
                </Modal.Footer>
              </Modal>
            </th>
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