import React from 'react'
import {Grid} from 'react-bootstrap'
import { connect} from 'react-redux'
import users from '../../data/users.json'




const GroupsView = (props) => {

  const filteredUser = users.find(user => user.id === parseInt(props.id, 10))

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


export default connect(
  state => ({
    user: state.user.userData //wyciągam ze stanu aplikacji listę
  })
)(GroupsView)