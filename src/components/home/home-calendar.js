/**
 * Created by mitroc on 01.03.17.
 */
import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const HomeCalendar = (props) => (
  <div style={{height: 400}}>
    <BigCalendar
      events={[]}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
);

export default HomeCalendar