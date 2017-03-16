import React from 'react'
//import {Grid} from 'react-bootstrap'
import './user-styles.css';
import {connect} from 'react-redux'

class UserProfile extends React.Component {
  render() {
    const {id, users} = this.props;
    if (users.data === null) {
      return <p>Waiting for user data…</p>
    }
    const filteredUser = users.data.find(user => user.id === parseInt(id, 10));
    return (
      <div className="profile-container black-background">
        <h3>User:</h3>

        <p><img src={filteredUser.avatar} alt="avatar"/></p>

        <p>
          {filteredUser.first_name} {filteredUser.last_name}, {filteredUser.gender}
        </p>

        <p>
          Login: {filteredUser.login}
        </p>

        <p>
          About {filteredUser.first_name}: {filteredUser.description}
        </p>

      </div>
    )
  }
}

export default connect(
  state => ({
    users: state.user
  })
)(UserProfile)