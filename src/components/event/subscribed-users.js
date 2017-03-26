import React from 'react'
import {connect} from 'react-redux'
import {Col, Grid, Button, Table} from 'react-bootstrap'
import {addUser} from '../../state/event'

class SubscribedUsers extends React.Component {
  render() {
    const {events, id, user, session, addUser, addFilter} = this.props;
    let userSessionToken, userSessionId;
    if (session.data) {
      userSessionToken = session.data.id;
      userSessionId = session.data.userId;
    } else {
      userSessionId = userSessionToken = 'Ładowanie danych';
    }
    console.log(userSessionToken)
    return (

      <Grid className="profile-container-event">
        <h2>Zapisani użytkownicy:</h2>
        <Col xs={12} md={2}>
          <Table striped bordered condensed hover className="event-table">
            <thead>
            <tr>
              <th>Avatar</th>
              <th>Imię</th>
              <th><Button onClick={(event) => {
                event.preventDefault();
                const addFilter = (events.data.filter(
                    event => event.id === parseInt(id, 10)
                  ).map((event) =>
                    event.guests.includes(userSessionId) ? event.guests : event.guests.push(userSessionId))
                );
                return (addUser(id, userSessionId, userSessionToken, addFilter),
                console.log(addFilter));
              }}>Zgłoś się</Button></th>
                </tr>
                </thead>
                <tbody>
              {
                events.data ? events.data.filter(
                event => event.id === parseInt(id, 10)
                ).map(
                (event) => event.guests ? event.guests.map((guest, index) => <tr key={index}>
                <td>
                {user.data ? user.data.filter(
                    person => person.id === guest).map(
                    person => <img src={person.avatar} key={guest} alt={guest}/>
                  ) : 'oczekiwanie na dane'}
                </td>
                <td>
                {user.data ? user.data.filter(
                    person => person.id === guest).map(
                    person => <p key={index + 10}>{person.login}</p>
                  ) : 'oczekiwanie na dane'}
                </td>
                <td>
                </td >
                </tr>) : 'oczekiwanie na dane'
                ) : <tr>
                <td>Brak zgłoszeń</td>
                {/*<td key={index+2000}></td>*/}
                {/*<td key={index+3000}></td>*/}
                </tr>
              }
                </tbody>
                </Table>
                </Col>
                </Grid>
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
                  addUser: (id, userSessionId, userSessionToken) => dispatch(addUser(id, userSessionId, userSessionToken)),
                })
                )(SubscribedUsers)