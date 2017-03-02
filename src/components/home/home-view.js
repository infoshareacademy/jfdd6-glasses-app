/**
 * Created by mitroc on 01.03.17.
 */
import React from 'react'
import HomeCalendar from './home-calendar'
import HomePostal from './home-postal'
import HomeSlider from './home-slider'
import HomeUpcomingEvents from './home-upcoming-events'

const HomeView = () => (
  <container className="container-fluid">
    <row className="row">
      <div className="col-xs-8">
        <HomeSlider />
      </div>
      <div className="col-xs-4">
        <HomePostal/>
      </div>
    </row>
    <row className="row">
      <div className="col-xs-8">
        <HomeCalendar/>
      </div>
      <div className="col-xs-4">
        <HomeUpcomingEvents/>
      </div>
    </row>
  </container>
);

export default HomeView