import React from 'react'
import {connect} from 'react-redux'
import { Table, Button, ButtonGroup } from 'react-bootstrap'
import moment from 'moment'

import { change } from '../../state/home-filters'

moment.locale('pl')

export default connect(
  state => ({
    events: state.home.data,
    eventsLimit: state.homeFilters.eventsLimit,
    firstEvent: state.homeFilters.firstEvent
  }),
  dispatch => ({
    change: (value) => dispatch(change(value))
  })
)
(
  ({events, eventsLimit, firstEvent, change}) => {
  return (
    <div>
      <br />
      <ButtonGroup>
        <Button onClick={() => change(1)}>Więcej</Button>
        <Button onClick={() => change(-1)}>Mniej</Button>
      </ButtonGroup>
      <br /><br />
      <Table striped hover bordered responsive>
        <thead>
        <tr>
          <th>Projekcja filmu</th>
          <th>Początek projekcji</th>
        </tr>
        </thead>
        <tbody>
        {
          events ?
            events.slice().filter(
              event =>
              moment(event.start) >= moment()
            ).sort(
              (prevEvent, nextEvent) =>
              moment(prevEvent.start) - moment(nextEvent.start)
            ).slice(
              firstEvent, firstEvent + eventsLimit
            ).map(
              event => (
                <tr key={event.id}>
                  <td>{event.title}</td>
                  <td>{moment(event.start).format('dddd, D MMMM, H:mm')}</td>
                </tr>
              )
            ): null
        }
        </tbody>
      </Table>
    </div>
  )
 }
)