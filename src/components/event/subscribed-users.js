import React from 'react'
import {connect} from 'react-redux'
import {Col, Grid, Button, Table} from 'react-bootstrap'
import {addUser} from '../../state/add-event'


class SubscribedUsers extends React.Component {
  render() {
    const {posts, id} = this.props;


    return (

      <Grid className="profile-container-event">
        <h2>Zapisani użytkownicy:</h2>
        <Col xs={12} md={2}>
          <Table striped bordered condensed hover className="event-table">
            <thead>
            <tr>
              <th>Avatar</th>
              <th>Imię</th>
              <th><Button onClick={() => addUser(id)}>Zgłoś się</Button></th>
            </tr>
            </thead>
            <tbody>
            {
              posts.data ? posts.data.filter(
                post => post.id === id,
              ).map(
                (post, index) => (post.data).map(
                  el => <tr>
                    <td>
                      {el}
                    </td>
                    <td>
                      {post.id}
                    </td>
                    <td>
                      {post.body}
                    </td>
                  </tr>
                )
              ) : <tr>
                <td >Brak zgłoszeń</td>
                <td></td>
                <td></td>
              </tr>
            }
            </tbody>
          </Table>
        </Col>
      </Grid>
    )
  }
}


export default connect(
  state => ({
    users: state.user,
    posts: state.posts
  }),
  dispatch => ({
    addUser: (id) => dispatch(addUser(id))
  })
)(SubscribedUsers)