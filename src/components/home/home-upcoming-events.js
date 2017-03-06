import React from 'react'
import {connect} from 'react-redux'
import { Grid, Table, Row, Col } from 'react-bootstrap'

const HomeUpcomingEvents = ({events}) => (
  <Grid>
    <Row>
      <Col xs={12}>
    <h1>Wydarzenia</h1>
    <Table striped>
      <thead>
        <tr>
          <th>Nazwa wydarzenia</th>
        </tr>
      </thead>
        <tbody>
        {
          events.map(
            event => (
            <tr key={event.id}>
              <td>{event.title}</td>
            </tr>
            )
          )
        }
        </tbody>
    </Table>
        </Col>
    </Row>
  </Grid>
);

export default connect(
  state => ({
    events: state.events.eventsData
  })
)(HomeUpcomingEvents)