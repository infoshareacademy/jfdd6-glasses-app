export const fetchData = (filePath) => dispatch => {
  dispatch({ type: 'movies/FETCH__BEGIN' })
  return fetch(
    process.env.PUBLIC_URL + filePath
  ).then(
    response => {
      if (response.ok) {
        const file = response.url.substring(response.url.lastIndexOf('/')+1)
        return response.json()
        .then(
          data => dispatch({
            type: 'movies/FETCH__SUCCESS',
            data,
            file: file
          })
        ).catch(
          error => dispatch({
            type: 'movies/FETCH__FAIL',
            error: 'Malformed ' + file + ' response'
          })
        )
      }
      throw new Error('Connection error')
    }
  ).catch(
    error => dispatch({
      type: 'movies/FETCH__FAIL',
      error: error.message
    })
  )
}

const initialState = {
  fetching: false,
  error: null,
  moviesData: [],
  moviesFetch: [],
  tagsList: [],
  customTags: [],
  query: ''
}

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case 'movies/FETCH__BEGIN':
      return {
        ...state,
        fetching: true,
        error: null
      }
    case 'movies/FETCH__SUCCESS':
      if (action.file === 'movies.json') {
        return {
          ...state,
          fetching: false,
          moviesData: action.data.sort((a, b) => a.name.localeCompare(b.name)),
          moviesFetch: action.data.sort((a, b) => a.name.localeCompare(b.name))
        }
      } else if (action.file === 'tags.json') {
        return {
          ...state,
          fetching: false,
          tagsList: action.data
        }
      }
      break
    case 'movies/FETCH__FAIL':
      return {
        ...state,
        fetching: false,
        error: state.error ? state.error + ', ' + action.error : action.error
      }
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
        moviesData: state.moviesFetch
      }
    case 'movies/search/EXECUTE':
      return {
        ...state,
        moviesData: action.value
      }
    case 'movies/search/EXECUTE_HINT':
      return {
        ...state,
        moviesData: action.moviesList,
        query: action.tagName
      }
    default:
      return state
  }
}

export default reducer