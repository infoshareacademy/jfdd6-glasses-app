import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import MovieCarousel from './movie-carousel'
import MovieDescription from './movie-description'
import MovieTitle from './movie-title'
import UserList from './movie-user-list'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {fetchMovie} from '../../state/movie'
import {fetchUsers} from '../../state/user'
import {fetchAddEvent} from '../../state/add-event'

export default connect(
  state => ({
    // session: state.session,
  }),
  dispatch => ({
    fetchAddEventHelper: () => dispatch(fetchAddEvent()),
    fetchMovie: () => dispatch(fetchMovie()),
    fetchUsers: () => dispatch(fetchUsers())
  })
)(class MovieView extends React.Component {
    componentWillMount() {
      this.props.fetchMovie();
      this.props.fetchUsers();
    }

    render() {
      const id = this.props.params.movieId;
      this.state = {
        userId: id + 1,
        movieId: id,

      };
      console.log('movie' + this.state.movieEventId)
      function addEvent() {
        return fetch(
          'http://localhost:3010/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'movie title',
                body: 'some description',
                userId: id,
                movieId: id+10,
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
              }
            )
          }
        ).then(
          response => {
            if (response.ok) {
              return response.json().then(
                data =>

                  location.href = "http://localhost:3001/event/" + data.id,
              )
            }
          })
      }

      // location.href = "../event/22";

      return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4} mdOffset={1}>
              <MovieCarousel id={id}/>
              <div className="movie-center"><Button onClick={addEvent}>Utwórz wydarzenie</Button></div>
            </Col>
            <Col xs={12} md={5} mdOffset={1} mdPull={1}>
              <MovieTitle id={id}/>
              <MovieDescription id={id}/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={9} mdOffset={1}>
              <div className="movie-user-list">
                <h4>Obejrzyj ten film z sąsiadem !! Zobacz kto ma go już w swojej
                  kolekcji: </h4>
              </div>
              <div id="x"><br/>
                <UserList id={id}/>
              </div>
              <br/>

              <br/>
            </Col>
          </Row>
        </Grid>
      )
    }
  }
)