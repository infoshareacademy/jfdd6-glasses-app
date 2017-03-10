import React from 'react'
import {Table, Grid} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class AllUsers extends React.Component {
  render() {

    const {users} = this.props;
    return (

      <Grid>
        <h1>Wszyscy użytkownicy</h1>
        <Table striped bordered>
          <tbody>
          {users.data.map(
            (arg) => <tr key={arg.id}>
              <td><Link to={'/user/' + arg.id}>{arg.first_name} {arg.last_name}</Link></td>
            </tr>
          )}
          </tbody>
        </Table>
      </Grid>
    )
  }
}

export default connect(
  state => ({
    users: state.user
  })
)(AllUsers)
