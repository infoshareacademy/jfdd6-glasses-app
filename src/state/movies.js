import data from '../data/movies.json'
import tagsList from '../data/tags.json'

const movies = data.sort((a, b) => a.name.localeCompare(b.name))

const initialState = {
  moviesData: movies,
  tagsList: tagsList,
  customTags: [],
  query: ''
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
        query: action.value,
        moviesData: initialState.moviesData
      }
    case 'movies/search/EXECUTE':
      return {
        ...state,
        moviesData: action.value
      }
    case 'movies/search/EXECUTE_HINT':
      return {
        ...state,
        moviesData: action.value,
        query: action.tagName
      }
    default:
      return state
  }
}

export default reducer