// ACTION TYPES
const CHANGE = 'home/CHANGE'

// ACTION CREATORS
export const change = (value, eventsLength) => ({
  type: CHANGE,
  value,
  eventsLength
})

// INITIAL VALUE
const initialState = {
  start: 0,
  step: 3,
  eventsLength: 3
}

// REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        start: state.start + action.value * state.step < 0 ?
          initialState.start :
          state.start + action.value * state.step
      }
    default:
      return state
  }
}