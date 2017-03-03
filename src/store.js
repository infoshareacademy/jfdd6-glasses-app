import { createStore } from 'redux'

const initialState = {

}

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case 'TODO':
      return {

      }
    default:
      return state
  }
}


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store