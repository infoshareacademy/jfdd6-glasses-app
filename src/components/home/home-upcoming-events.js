import React from 'react'
import {connect} from 'react-redux'
import { Grid, Table } from 'react-bootstrap'

const HomeUpcomingEvents = ({events}) => (
  <Grid>
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
  </Grid>
);

export default connect(
  state => ({
    events: state.events.eventsData
  })
)(HomeUpcomingEvents)