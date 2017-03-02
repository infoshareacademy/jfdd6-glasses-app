import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Nav from './components/navigation'
import MovieView from './components/movie/movie-view'
import MoviesView from './components/movies/movies-view'
import UserView from './components/user/user-view'
import UsersView from './components/users/users-view'
import EventView from './components/event/event-view'

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Nav}>
        <Route path="movie" component={MovieView} />
        <Route path="movies" component={MoviesView} />
        <Route path="user/:userId" component={UserView} />
        <Route path="users" component={UsersView} />
        <Route path="event" component={EventView} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);