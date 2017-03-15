const initialState = {
  customTags: [],
  staticQuery: '',
  query: '',
  queryTag: 0
}

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case 'movies/tags/CUSTOM':
      return {
        ...state,
        customTags: state.customTags.filter(tag => tag !== action.value).concat(action.value)
      }
    case 'movies/tags/REMOVE':
      return {
        ...state,
        customTags: state.customTags.filter(tag => tag !== action.value)
      }
    case 'movies/tags/RESET':
      return {
        ...state,
        customTags: initialState.customTags
      }
    case 'movies/search/QUERY':
      return {
        ...state,
        staticQuery: action.value,
        query: initialState.query,
        queryTag: initialState.queryTag
      }
    case 'movies/search/EXECUTE':
      return {
        ...state,
        query: state.staticQuery
      }
    case 'movies/search/EXECUTE_HINT':
      return {
        ...state,
        staticQuery: action.tagName,
        queryTag: action.tagId
      }
    default:
      return state
  }
}

export default reducer