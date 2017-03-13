import React from 'react'
import MapFeature from './user-map'
import UserProfile from './user-profile.js'
import UserFilmList from './user-film-list.js'

import {connect} from 'react-redux'
import {fetchMovie} from '../../state/movie'
import {fetchUsers} from '../../state/user'

class UserView extends React.Component {
  componentWillMount() {
    this.props.fetchMovie();
    this.props.fetchUsers()
  }

  render() {
    const userId = this.props.params.userId;

    return (

      <div>
        <UserProfile id={userId}/>
        <UserFilmList id={userId}/>
        <MapFeature />
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
  fetchMovie: () => dispatch(fetchMovie()),
  fetchUsers: () => dispatch(fetchUsers())
})
)(UserView)

