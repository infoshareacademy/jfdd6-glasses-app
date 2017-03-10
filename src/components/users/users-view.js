import React from 'react'
import AllUsers from './users'

import {connect} from 'react-redux'
import {fetchUsers} from '../../state/user'


class UsersView extends React.Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  render() {

    return (
      <div>
        <AllUsers />
      </div>
    )
  }
}

export default connect(
  state => ({
    // users: state.users,
    // movie: state.movie
  }),
  dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
  })
)(UsersView)