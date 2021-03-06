const FETCH__BEGIN = 'home/FETCH__BEGIN'
const FETCH__SUCCESS = 'home/FETCH__SUCCESS'
const FETCH__FAIL = 'home/FETCH__FAILED'

export const fetchData = () => (dispatch, getState) => {
  const { id } = getState().session.data
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    id === 'guest' ? process.env.PUBLIC_URL + '/data/home-events.json'
      : 'https://mysterious-lake-35712.herokuapp.com/api/events/'
  ).then(
    response => {
      if (response.ok) {
        return response.json().catch(
          error => dispatch({
            type: FETCH__FAIL,
            error: 'Malformed JSON response'
          })
        )
      }
      throw new Error('Connection error')
    }
  ).then(
    data => dispatch({
      type: FETCH__SUCCESS,
      data
    })
  ).catch(
    error => dispatch({
      type: FETCH__FAIL,
      error: error.message
    })
  )
}

const initialState = {
  data: null,
  fetching: false,
  error: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH__BEGIN:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case FETCH__SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false
      }
    case FETCH__FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    default:
      return state
  }
}