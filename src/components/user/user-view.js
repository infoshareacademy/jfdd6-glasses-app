import React from 'react'
import UserProfile from './user-profile.js'
import UserFilmList from './user-film-list.js'
import UserEventList from './user-event-list.js'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
import {fetchMovie} from '../../state/movie'
import {fetchUsers} from '../../state/user'
import {fetchData} from '../../state/home-fetch'


class UserView extends React.Component {
  componentWillMount() {
    this.props.fetchMovie()
    this.props.fetchUsers()
    this.props.fetchEvents()
  }

  render() {
    const userId = this.props.params.userId
    let loggedUser
    if (this.props.user) {
      loggedUser = this.props.user.id
    }

    return (

      <Grid>
        <Row>
          <Col xs={12} sm={6}><UserFilmList id={userId}/></Col>
          <Col xs={12} sm={6}><UserProfile id={userId}/></Col>
        </Row>
        <Row className="events-list">
          <Col xs={12} sm={6}><UserEventList id={userId} type="host"/></Col>

          {loggedUser != null && loggedUser === parseInt(userId, 10)
            ? <Col xs={12} sm={6}><UserEventList id={userId} type="guest"/></Col>
            : null}
        </Row>
      </Grid>
    )
  }
}
  export default connect(
  state => ({
    user: state.userLogin.data
}),
dispatch => ({
  fetchMovie: () => dispatch(fetchMovie()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchEvents: () => dispatch(fetchData())
})
)(UserView)

