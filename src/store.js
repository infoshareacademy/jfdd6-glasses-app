import {createStore, combineReducers} from 'redux'

import moviesReducer from './state/movies'
import movieReducer from './state/movie'
import homeReducer from './state/home'

const reducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  home: homeReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store