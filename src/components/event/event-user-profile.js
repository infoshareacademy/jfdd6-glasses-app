import React from 'react'
import {connect} from 'react-redux'
import {Col, Grid} from 'react-bootstrap'

class EventUserProfile extends React.Component {
  render() {
    const {id, users, events} = this.props;
    if (users.data === null) {
      return <p>Waiting for user data…</p>
    }
console.log()
    const c = (events.data.filter(event => event.host === id ? event.host : 0));
    const filteredUser = users.data.find(user => user.id === parseInt(id, 10));
    return (

      <Grid className="profile-container-event">
        <h2>Seans organizuje:</h2>
        <Col xs={12} md={2}>
          <p>
            <span className="name">{filteredUser.login}</span>
          </p>
          <p><img src={filteredUser.avatar} alt="avatar"/></p>
        </Col>
        <Col xs={12} md={4}>
          <h3>{filteredUser.first_name} {filteredUser.last_name}</h3>
          <p>
            <span className="strong"> O {filteredUser.first_name}: </span>
            {filteredUser.description}
          </p>
        </Col>
      </Grid>
    )
  }
}


export default connect(
  state => ({
    users: state.user,
    events: state.events
  })
)(EventUserProfile)
