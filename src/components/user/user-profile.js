import React from 'react'
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
        <h2>{filteredUser.first_name} {filteredUser.last_name}</h2>

        <p><img src={filteredUser.avatar} alt="avatar"/></p>

        <p>
         {filteredUser.gender}
        </p>

        <p>
          <span className="strong"> Login: {filteredUser.login}</span>
        </p>

        <p>
          <span className="strong"> About {filteredUser.first_name}: </span> {filteredUser.description}
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