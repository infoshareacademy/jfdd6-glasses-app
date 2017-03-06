import React from 'react'
import {Grid} from 'react-bootstrap'
import users from '../../data/users.json'

const myUser = 0

const GroupsView = () => (
  <Grid>
    <h3>User:</h3>

    <p><img src={users[myUser].avatar} alt="avatar"/></p>

    <p>
      {users[myUser].first_name} {users[myUser].last_name}, {users[myUser].gender}
    </p>

    <p>
      Login: {users[myUser].login}
    </p>

    <p>
      About {users[myUser].first_name}: {users[myUser].description}
    </p>

  </Grid>
)

export default GroupsView