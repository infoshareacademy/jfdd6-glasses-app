import React from 'react'

import BigCalendar from 'react-big-calendar';
import moment from 'moment'
import events from '../../data/events-calendar'

BigCalendar.momentLocalizer(moment);

const HomeCalendar = (props) => (
  <div style={{height: 450}}>
    <BigCalendar
      events={events}
    />
  </div>
);

export default HomeCalendar