import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import FieldGroup from './forms'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../styles/styles-all.css'

class LoginView extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <div className="log-in-background">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6}>
              <Image src={require("../img/logo.png")} alt="Logo Klatka" className="logo" responsive />
            </Col>
            <Col xs={12} sm={6}>

              <form>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Twój login:"
                  placeholder="Login"
                />

                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Twoje hasło:"
                  placeholder="Hasło"
                />

              </form>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(LoginView)