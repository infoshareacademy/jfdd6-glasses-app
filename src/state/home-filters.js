// ACTION TYPES
const CHANGE = 'home/CHANGE'

// ACTION CREATORS
export const change = (value) => ({
  type: CHANGE,
  value
})

// INITIAL VALUE
const initialState = {
  step: 3,
  start: 0
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