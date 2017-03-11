import React from 'react'
import {Grid} from 'react-bootstrap'
import { connect} from 'react-redux'
//import users from '../../data/users.json'



class UserProfile extends React.Component {

  render() {

    const {id, users} = this.props;
    const filteredUser = users.data ? users.data.find(user => user.id === parseInt(id, 10)) : users.data[0];

    return (
      <Grid>
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

      </Grid>
    )
  }
}

export default connect(
  state => ({
    users: state.user //wyciągam ze stanu aplikacji listę
  })
)(UserProfile)