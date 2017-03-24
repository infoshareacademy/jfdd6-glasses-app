import React from 'react'
import {connect} from 'react-redux'
import {Col, Grid, Button, Table} from 'react-bootstrap'
import {addUser, readEvents} from '../../state/add-event'


class SubscribedUsers extends React.Component {
  render() {
    const {events, id, user} = this.props;


    return (

      <Grid className="profile-container-event">
        <h2>Zapisani użytkownicy:</h2>
        <Col xs={12} md={2}>
          <Table striped bordered condensed hover className="event-table">
            <thead>
            <tr>
              <th>Avatar</th>
              <th>Imię</th>
              <th><Button onClick={() => addUser(id)}>Zgłoś się</Button></th>
            </tr>
            </thead>
            <tbody>
            {
              events.data ? events.data.filter(
                event => event.id === +id
              ).map(
                (event) => event.guests.map( (guest, index) => <tr key={index}>
                    <td>
                      {user.data.filter(
                        person => person.id === guest).map(
                        person => <img src={person.avatar} key={guest} alt={guest} />
                      )}
                    </td>
                    <td>
                      {user.data.filter(
                        person => person.id === guest).map(
                        person => <p key={index+10}>{person.login}</p>
                      )}
                    </td>
                    <td>
                    </td >
                  </tr>

              )) : <tr>
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
    events: state.events,
    session: state.session
  }),
  dispatch => ({
    addUser: (id) => dispatch(addUser(id)),
    readEvents: () => dispatch(readEvents())
  })
)(SubscribedUsers)