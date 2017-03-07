import {createStore, combineReducers} from 'redux'

import moviesReducer from './state/movies'
import movieReducer from './state/movie'
import userReducer from './state/user'
import eventsReducer from './state/events'

const reducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  movie: movieReducer,
  events: eventsReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store