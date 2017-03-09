// ACTION TYPES
const CHANGE = 'home/CHANGE'

// ACTION CREATORS
export const change = (value) => ({
  type: CHANGE,
  value
})

// INITIAL VALUE
const initialState = {
  eventsLimit: 5
}

// REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        eventsLimit: state.eventsLimit + action.value
      }
    default:
      return state
  }
}

