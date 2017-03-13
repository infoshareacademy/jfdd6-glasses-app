const initialState = {
  value: 3000
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'range/CHANGE':
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}