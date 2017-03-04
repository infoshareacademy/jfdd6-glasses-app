import {createStore, combineReducers} from 'redux'

import moviesReducer from './state/movies'

const reducer = combineReducers({
  movies: moviesReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store