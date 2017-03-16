import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import MovieTitle from '../movie/movie-title'
import MovieDescription from '../movie/movie-description'
import {fetchMovie} from '../../state/movie'

class EventView extends React.Component {
  componentWillMount() {
    this.props.fetchMovie();
  }

  render() {
    const id = this.props.params.eventId;

    return (
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <div width="500px" height="500px">FOTO FILMU</div>
          </Col>
          <Col xs={12} md={6}>
            <MovieTitle id={id}/>
            <MovieDescription id={id}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <p>abc</p>
          </Col>
        </Row>


      </Grid>
    )
  }
}

export default connect(
  state => ({
    movie: state.movie
  }),
  dispatch => ({
    fetchMovie: () => dispatch(fetchMovie()),
  })
)(EventView)