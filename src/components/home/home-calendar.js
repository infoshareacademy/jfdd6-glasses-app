import React from 'react'
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar';
import moment from 'moment'

BigCalendar.momentLocalizer(moment)
moment.locale('pl')

const HomeCalendar = ({calendarEvents}) => {
  return (
  <div style={{height: 600}}>
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

HomeCalendar.propTypes = {
  calendarEvents: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    start: React.PropTypes.string.isRequired,
    end: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string,
    dist: React.PropTypes.number.isRequired
  }))
}

export default connect (
  state => ({
    calendarEvents: state.home.data,
  }),
  dispatch => ({})
)(HomeCalendar)