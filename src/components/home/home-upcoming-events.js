import React from 'react'
import {connect} from 'react-redux'
import { Table } from 'react-bootstrap'

const HomeUpcomingEvents = ({events}) => {
  const limit = 8

  return (
  <div>
    <h2>Wydarzenia</h2>
    <Table striped responsive>
      <thead>
        <tr>
          <th>Nazwa wydarzenia</th>
          <th>Początek projekcji</th>
        </tr>
      </thead>
        <tbody>
        {
          events.sort(
            (prevEvent ,nextEvent) => (
              new Date(nextEvent.start) - new Date(prevEvent.start)
            )).slice(0, limit).map(
            event => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>
                {new Date(event.start).getFullYear()}-
                {new Date(event.start).getMonth()}-
                {new Date(event.start).getDate() + ' '}
                {new Date(event.start).getHours()}:
                {new Date(event.start).getMinutes()}
              </td>
            </tr>
            )
          )
        }
        </tbody>
    </Table>
  </div>
)}

export default connect(
  state => ({
    events: state.events.eventsData
  })
)(HomeUpcomingEvents)