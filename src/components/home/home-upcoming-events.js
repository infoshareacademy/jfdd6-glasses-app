import React from 'react'
import {connect} from 'react-redux'

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

      }
      </tbody>
    </Table>
  </Grid>
);

export default connect(
  state => ({
    events: state.events.eventsData
  }),
)(HomeUpcomingEvents)