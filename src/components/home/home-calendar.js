/**
 * Created by mitroc on 01.03.17.
 */
import React from 'react'

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../../data/events-js'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const HomeCalendar = (props) => (
  <div style={{height: 400}}>
    <BigCalendar
      events={events}
    />
  </div>
);

export default HomeCalendar