import React from 'react'
import {connect} from 'react-redux'
import {Col, Grid} from 'react-bootstrap'


class EventUserProfile extends React.Component {
  render() {
    const {id, users} = this.props;
    if (users.data === null) {
      return <p>Waiting for user data…</p>
    }
    const filteredUser = users.data.find(user => user.id === parseInt(id, 10));
    return (

      <Grid>
        <Col xs={12} md={3}>

          <h2>Seans organizuje:</h2>

          <p><img src={filteredUser.avatar} alt="avatar"/></p>

        </Col>
        <Col xs={12} md={3}>
          <p>
            <span className="strong"> Login: {filteredUser.first_name} {filteredUser.last_name}</span>
          </p>

          <p>
            <span className="strong"> About {filteredUser.first_name}: </span>
            {filteredUser.description}
          </p>

        </Col>
      </Grid>
    )
  }
}


export default connect(
  state => ({
    users: state.user
  })
)(EventUserProfile)