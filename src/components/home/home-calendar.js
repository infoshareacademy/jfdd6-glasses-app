import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment'

BigCalendar.momentLocalizer(moment)
moment.locale('pl')

const HomeCalendar = ({events, router}) => (
  <div style={{height: 635}}>
    <BigCalendar
      events={ events ?
        events.map(
          event => ({
            ...event,
            title: event.desc,
            start: new Date(event.start),
            end: new Date(new Date(event.start
              ).setHours(new Date(event.start
                ).getHours() + 2)
            )
          })
        ) : []
      }
      onSelectEvent={event => router.push('/event/' + event.movieId)}
    />
  </div>
)

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

export default HomeCalendar