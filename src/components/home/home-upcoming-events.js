import React from 'react'
import {connect} from 'react-redux'
import { Table, Button } from 'react-bootstrap'

import { change } from '../../state/home'

const HomeUpcomingEvents = ({events, eventsLimit, change}) => {
  const eventsImproved = events.slice().sort(
    (prevEvent, nextEvent) =>(
      new Date(nextEvent.start) - new Date(prevEvent.start)
    )).slice(0, eventsLimit).map(
    event => ({
      ...event,
      startYear: new Date(event.start).getFullYear(),
      startMonth:
        (new Date(event.start).getMonth()) >= 10 ?
          new Date(event.start).getMonth() :
            '0' + new Date(event.start).getMonth(),
      startDay:
        (new Date(event.start).getDate()) >= 10 ?
          new Date(event.start).getDate() :
            '0' + new Date(event.start).getDate(),

      startHour:
        (new Date(event.start).getHours()) >= 10 ?
          new Date(event.start).getHours() :
            '0' + new Date(event.start).getHours(),

      startMinute:
        (new Date(event.start).getMinutes()) >=10 ?
          new Date(event.start).getMinutes() :
            '0' + new Date(event.start).getMinutes()
    })
  )

  return (
  <div>
    <h2>Wydarzenia</h2>
    <Button onClick={() => change(1)}>Zwiększ</Button>
    <Button onClick={() => change(-1)}>Zmniejsz</Button>
    <Table striped responsive>
      <thead>
        <tr>
          <th>Nazwa wydarzenia</th>
          <th>Początek projekcji</th>
        </tr>
      </thead>
        <tbody>
        {
          eventsImproved.map(
            event => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>
                {event.startYear + '-'}
                {event.startMonth + '-'}
                {event.startDay + ' '}
                {event.startHour + ':'}
                {event.startMinute}
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
    events: state.home.homeEventsData,
    eventsLimit: state.home.homeEventsLimit
  }),
  dispatch => ({
    change: (value) => dispatch(change(value))
  })
)(HomeUpcomingEvents)