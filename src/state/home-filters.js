// ACTION TYPES
const CHANGE = 'home/CHANGE'

// ACTION CREATORS
export const change = (value) => ({
  type: CHANGE,
  value
})

// INITIAL VALUE
const initialState = {
  eventsLimit: 5,
  firstEvent: 0
}

// REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        firstEvent: state.firstEvent + action.value < 0 ?
          initialState.firstEvent :
          state.firstEvent + action.value
      }
    default:
      return state
  }
}

