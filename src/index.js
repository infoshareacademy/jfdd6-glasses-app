import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import moment from 'moment'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import Nav from './components/navigation'
import HomeView from './components/home/home-view'
import MovieView from './components/movie/movie-view'
import MoviesView from './components/movies/movies-view'
import UserView from './components/user/user-view'
import UsersView from './components/users/users-view'
import EventView from './components/event/event-view'

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Nav}>
        <Route path="home" component={HomeView} />
        <Route path="movie" component={MovieView} />
        <Route path="movies" component={MoviesView} />
        <Route path="user" component={UserView} />
        <Route path="users" component={UsersView} />
        <Route path="event" component={EventView} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);