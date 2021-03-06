import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-input-range/lib/css/index.css'
import './components/movies/movies-style.css'
import './components/movie/movie-styles.css'
import './components/user/user-styles.css'
import './components/event/event-styles.css'
import './components/home/home-style.css'
import './styles/styles-all.css'

import App from './components/app'
import HomeView from './components/home/home-view'
import MovieView from './components/movie/movie-view'
import MoviesView from './components/movies/movies-view'
import UserView from './components/user/user-view'
import UsersView from './components/users/users-view'
import EventView from './components/event/event-view'

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeView}/>
          <Route path="movie/:movieId" component={MovieView}/>
          <Route path="movies" component={MoviesView}/>
          <Route path="user/:userId" component={UserView}/>
          <Route path="users" component={UsersView}/>
          <Route path="event/:eventId" component={EventView}/>
         </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
