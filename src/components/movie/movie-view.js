import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
// import MovieSearch from './movie-search'
import MovieCarousel from './movie-carousel'
import MovieDescription from './movie-description'
import MovieTitle from './movie-title'
import UserList from './movie-user-list'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {fetchMovie} from '../../state/movie'
import {fetchUsers} from '../../state/user'

class MovieView extends React.Component {
  componentWillMount() {
    this.props.fetchMovie();
    this.props.fetchUsers()
  }

  render() {
    const id = this.props.params.movieId;

    return (
      <Grid>
        {/*<Row className="show-grid">*/}
        {/*<Col xs={12} md={12}>*/}
        {/*<MovieSearch/>*/}
        {/*</Col>*/}
        {/*</Row>*/}
        <Row className="show-grid">
          <Col xs={12} md={4} mdOffset={1}>
            <MovieCarousel id={id}/>
          </Col>
          <Col xs={12} md={5} mdOffset={1} mdPull={1}>
            <MovieTitle id={id}/>
            <MovieDescription id={id}/>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={10} mdOffset={1}>
            <h4>Obejrzyj ten film z sąsiadem !! Zobacz kto już go posiada: </h4>
            <table>
              <tbody>
              <UserList id={id}/>
              </tbody>
            </table>
            <br/>

          </Col>
        </Row>
        {/*<Row className="show-grid">*/}
        {/*<Col xs={12} md={12}>*/}
        {/*<h2>Footer</h2>*/}
        {/*</Col></Row>*/}
      </Grid>
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
)(MovieView)