import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'

import moviesReducer from './state/movies'
import movieReducer from './state/movie'
import userReducer from './state/user'

const reducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */
  composeEnhancers(
    persistState(['counter']),
    applyMiddleware(thunk)
  )
);

export default store