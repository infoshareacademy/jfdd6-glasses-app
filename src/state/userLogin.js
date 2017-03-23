const FETCH__BEGIN = 'user/FETCH__BEGIN'
const FETCH__SUCCESS = 'user/FETCH__SUCCESS'
const FETCH__FAIL = 'user/FETCH__FAILED'
const FETCH__LOGOUT = 'session/FETCH__LOGOUT'

export const fetchUser = (accessToken, userId) => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    'https://mysterious-lake-35712.herokuapp.com/api/users/' + userId + '?access_token=' + accessToken
  ).then(
    response => {
      if (response.ok) {
        return response.json().then(
          data => dispatch({
            type: FETCH__SUCCESS,
            data
          })
        ).catch(
          error => dispatch({
            type: FETCH__FAIL,
            error: 'Malformed JSON response'
          })
        )
      }
      throw new Error('Connection error')
    }
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
    case FETCH__LOGOUT:
      return {
        data: null,
        fetching: false,
        error: null
      }
    default:
      return state
  }
}