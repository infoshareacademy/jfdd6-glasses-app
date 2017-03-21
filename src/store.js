import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import moviesReducer from './state/movies'
import moviesFiltersReducer from './state/movies-filters'
import movieReducer from './state/movie'
import userReducer from './state/user'
import homeFetchReducer from './state/home-fetch'
import homeFiltersReducer from './state/home-filters'
import addeventReducer from './state/add-event'

import userReducerLogin from './state/userLogin'
import sessionReducer from './state/session'

const reducer = combineReducers({
  movies: moviesReducer,
  moviesFilters: moviesFiltersReducer,
  user: userReducer,
  movie: movieReducer,
  homeFetch: homeFetchReducer,
  homeFilters: homeFiltersReducer,
  posts: addeventReducer,

  session: sessionReducer,
  userLogin: userReducerLogin
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