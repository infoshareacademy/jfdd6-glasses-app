import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import moviesReducer from './state/movies'
import movieReducer from './state/movie'
import userReducer from './state/user'
import homeReducer from './state/home'
import homeFiltersReducer from './state/home-filters'
import rangeReducer from './state/range'

const reducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  movie: movieReducer,
  home: homeReducer,
  homeFilters: homeFiltersReducer,
  range: rangeReducer
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