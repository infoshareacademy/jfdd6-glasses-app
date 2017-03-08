import React from 'react'
import {connect} from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import moment from 'moment'

import { change } from '../../state/home'

moment.locale('pl')

const HomeUpcomingEvents = ({events, eventsLimit, change}) => {
  return (
  <div>
    <h2>Nadchodzące Projekcje</h2>
    <Button onClick={() => change(1)}>Więcej</Button>
    <Button onClick={() => change(-1)}>Mniej</Button>
    <Table striped responsive>
      <thead>
        <tr>
          <th>Nazwa wydarzenia</th>
          <th>Początek projekcji</th>
        </tr>
      </thead>
        <tbody>
        {
          events.slice().filter(
            event =>
              moment(event.start) >= moment()
          ).sort(
            (prevEvent, nextEvent) =>
              moment(prevEvent.start) - moment(nextEvent.start)
          ).slice(
            0, eventsLimit + 1
          ).map(
            event => (
              <tr key={event.id}>
                <td>{event.title}</td>
                <td>{moment(event.start).format('dddd, D MMMM, H:mm')}</td>
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