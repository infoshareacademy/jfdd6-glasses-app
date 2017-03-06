import React from 'react'

import HomeCalendar from './home-calendar'
import HomePostal from './home-postal'
import HomeSlider from './home-slider'
import HomeUpcomingEvents from './home-upcoming-events'

const HomeView = () => (
  <container className="container-flex text-center">
    <row className="row">
      <div className="col-xs-8 bg-success">
        <HomeSlider />
      </div>
      <div className="col-xs-4 bg-info">
        <HomePostal/>
      </div>
    </row>
    <row className="row">
      <div className="col-xs-8 bg-primary jumbotron">
        <HomeCalendar/>
      </div>
      <div className="col-xs-4 bg-warning">
        <HomeUpcomingEvents/>
      </div>
    </row>
  </container>
);

export default HomeView