// ACTION TYPES
const CHANGE = 'home/CHANGE'
const SLIDE = 'range/CHANGE'

// ACTION CREATORS
export const change = (value, remainingEvents) => ({
  type: CHANGE,
  value,
  remainingEvents
})

export const slide = (value) => ({
  type: SLIDE,
  value
})

// INITIAL VALUE
const initialState = {
  start: 0,
  value: 3000
}

// REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        start: state.start + action.value < 0 ?
          initialState.start :
            state.start  + action.value > action.remainingEvents.length - 1?
              state.start :
            state.start + action.value
      }
    case SLIDE:
      return {
        ...state,
        value: action.value,
        start:0
      }
    default:
      return state
  }
}