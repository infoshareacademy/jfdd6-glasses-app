import events from '../data/events'

//Action types
const CHANGE = 'home/CHANGE'

//Action creator
export const change = (value) => ({
  type: CHANGE,
  value
})

//Initial state
const initialState = {
  homeEventsData: events,
  homeEventsLimit: 8
}

//Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        homeEventsLimit: state.homeEventsLimit + action.value
      }
    default:
      return state
  }
}
