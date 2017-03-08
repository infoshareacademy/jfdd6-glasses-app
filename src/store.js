import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import moviesReducer from './state/movies'
import movieReducer from './state/movie'
import homeReducer from './state/home'

const reducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  home: homeReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store