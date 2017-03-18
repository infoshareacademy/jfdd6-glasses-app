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
        <Table bordered className="film-table">
          <tbody>
          {users.data ? users.data.map(
            (arg) => <tr key={arg.id}>
              <td><Link to={'/user/' + arg.id}>{arg.first_name} {arg.last_name}</Link></td>
            </tr>
          ) :
          <tr><td>Brak danych</td></tr>
          }
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
