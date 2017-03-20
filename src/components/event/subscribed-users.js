import React from 'react'
import {connect} from 'react-redux'
import {Col, Grid, Button, Table} from 'react-bootstrap'
import './event-styles.css';

class SubscribedUsers extends React.Component {
  render() {
    const {posts, id} = this.props;

    function addUser() {
      return fetch(
        'http://localhost:3000/posts/'+120, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              // title: 'movie title',
              // body: 'some description',
              // userId: 123,
              // movieId: 123+10,
              data: [12]

            }
          )
        }
      ).then(
        response => {
          if (response.ok) {
            return response.json().then(
              data =>

                console.log(data.id, data),
            )
          }
        })
    }

    return (

      <Grid className="profile-container-event">
        <h2>Zapisani użytkownicy:</h2>
        <Col xs={12} md={2}>
          <Table striped bordered condensed hover className="event-table">
            <thead>
            <tr>
              <th>Avatar</th>
              <th>Imię</th>
              <th><Button onClick={addUser}>Zgłoś się</Button></th>
            </tr>
            </thead>
            <tbody>
            {
              posts.data ? posts.data.filter(
                  post => post.id === 109,
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
                ) : <tr><td >Brak zgłoszeń</td><td></td><td></td></tr>
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
  })
)(SubscribedUsers)