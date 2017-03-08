import React from 'react'

import BigCalendar from 'react-big-calendar';
import moment from 'moment'
import events from '../../data/home-events.json'

BigCalendar.momentLocalizer(moment)
moment.locale('pl')

const HomeCalendar = (props) => (
  <div style={{height: 550}}>
    <BigCalendar
      events={events.map(
        event => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end)
        })
      )}
    />
  </div>
);

export default HomeCalendar