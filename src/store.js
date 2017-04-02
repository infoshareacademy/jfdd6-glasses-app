import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import moviesReducer from './state/movies'
import moviesFiltersReducer from './state/movies-filters'
import movieReducer from './state/movie'
import userReducer from './state/user'
import eventsReducer from './state/events'
import homeFiltersReducer from './state/home-filters'
import homeLocationReducer from './state/home-location'
import eventReducer from './state/event'

import userReducerLogin from './state/userLogin'
import sessionReducer from './state/session'

const reducer = combineReducers({
  movies: moviesReducer,
  moviesFilters: moviesFiltersReducer,
  user: userReducer,
  movie: movieReducer,
  events: eventsReducer,
  eventsFilters: homeFiltersReducer,
  session: sessionReducer,
  userLogin: userReducerLogin,
  userLocation: homeLocationReducer,
  event: eventReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store