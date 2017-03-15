import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './components/movies/movies-style.css'
import 'react-input-range/lib/css/index.css'
import './components/styles/styles-all.css';

import Nav from './components/navigation'
import HomeView from './components/home/home-view'
import MovieView from './components/movie/movie-view'
import MoviesView from './components/movies/movies-view'
import UserView from './components/user/user-view'
import UsersView from './components/users/users-view'
import EventView from './components/event/event-view'
import LoginView from './components/login/login-view'

import './components/styles/styles-all.css'

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Nav}>
          <Route path="home" component={HomeView}/>
          <Route path="login" component={LoginView}/>
          <Route path="movie/:movieId" component={MovieView}/>
          <Route path="movies" component={MoviesView}/>
          <Route path="user/:userId" component={UserView}/>
          <Route path="users" component={UsersView}/>
          <Route path="event" component={EventView}/>
         </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
