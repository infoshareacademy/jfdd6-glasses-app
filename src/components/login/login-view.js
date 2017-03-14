import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style-login.css'


class LoginView extends React.Component {
  componentWillMount() {
  }

  render() {
    const id = this.props.params.movieId;

    return (
      <Grid>
        <Row className="show-grid log-in-background">
          <Col xs={12}>
           <p>dqwedwqdwq</p>
           <p>dqwedwqdwq</p>
           <p>dqwedwqdwq</p>
           <p>dqwedwqdwq</p>
           <p>dqwedwqdwq</p>
           <p>dqwedwqdwq</p>
           <p>dqwedwqdwq</p>
           <p>dqwedwqdwq</p>
           <p>dqwedwqdwq</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(LoginView)