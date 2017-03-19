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
  tagsList: []
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
          moviesData: action.data.sort((a, b) => a.name.localeCompare(b.name))
        }
      } else if (action.file === 'tags.json') {
        return {
          ...state,
          fetching: false,
          tagsList: action.data.sort((a, b) => a.name.localeCompare(b.name))
        }
      }
      break
    case 'movies/FETCH__FAIL':
      return {
        ...state,
        fetching: false,
        error: state.error ? state.error + ', ' + action.error : action.error
      }
    default:
      return state
  }
}

export default reducer