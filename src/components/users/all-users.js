import React from 'react'
import {Table, Grid} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const AllUsers = ({users}) => {

  return(
    <Grid>
      <h1>Wszyscy użytkownicy</h1>
      <Table striped bordered>
        <tbody>
        {users.map(
          (arg) => <tr key={arg.id}><td><Link to={'/user/' + arg.id}>{arg.first_name} {arg.last_name}</Link></td></tr>
            )}
        </tbody>
      </Table>
    </Grid>
  )
}

  export default connect(
    state => ({
      users: state.user.userData,
    })
  )(AllUsers)
