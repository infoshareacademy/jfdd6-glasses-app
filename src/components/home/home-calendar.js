import React from 'react'
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar';
import moment from 'moment'

BigCalendar.momentLocalizer(moment)
moment.locale('pl')

const HomeCalendar = ({calendarEvents}) => {

  return (
  <div style={{height: 550}}>
    <BigCalendar
      events={calendarEvents ?
        calendarEvents.map(
        event => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end)
        })
      ) : []
      }
    />
  </div>
  )}

export default connect (
  state => ({
    calendarEvents: state.home.data,
  }),
  dispatch => ({})
)(HomeCalendar)