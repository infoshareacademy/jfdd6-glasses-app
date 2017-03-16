import React from 'react'
//import MapFeature from './user-map'
import UserProfile from './user-profile.js'
import UserFilmList from './user-film-list.js'
import {connect} from 'react-redux'

import {fetchMovie} from '../../state/movie'
import {fetchUsers} from '../../state/user'

import {Grid, Row, Col} from 'react-bootstrap'

class UserView extends React.Component {
  componentWillMount() {
    this.props.fetchMovie();
    this.props.fetchUsers()
  }

  render() {
    const userId = this.props.params.userId;

    return (

      <Grid>
        <Row className="row">
          <Col xs={12} sm={6}><UserFilmList id={userId}/></Col>
          <Col xs={12} sm={6}><UserProfile id={userId}/></Col>
        </Row>
      </Grid>
    )
  }
}
  export default connect(
  state => ({

}),
dispatch => ({
  fetchMovie: () => dispatch(fetchMovie()),
  fetchUsers: () => dispatch(fetchUsers())
})
)(UserView)

