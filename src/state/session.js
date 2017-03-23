const FETCH__BEGIN = 'session/FETCH__BEGIN'
const FETCH__SUCCESS = 'session/FETCH__SUCCESS'
const FETCH__FAIL = 'session/FETCH__FAILED'
const FETCH__LOGOUT = 'session/FETCH__LOGOUT'
const GUEST = 'session/GUEST'

import { fetchUser } from './userLogin'

export const fetchSession = (username, password) => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    'https://mysterious-lake-35712.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    }
  ).then(
    response => {
      if (response.ok) {
        return response.json().then(
          data => {
            dispatch({
              type: FETCH__SUCCESS,
              data
            })
            dispatch(fetchUser(data.id, data.userId))
          }
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

export const endSession = (accessToken) => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    'https://mysterious-lake-35712.herokuapp.com/api/users/logout?access_token=' + accessToken,
    { method: 'POST' }
  ).then(() => dispatch({ type: FETCH__LOGOUT })
  ).catch(
    error => dispatch({
      type: FETCH__FAIL,
      error: error.message
    })
  )
}

export const letGuestIn = () => ({
  type: GUEST
})

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
        error: false
      }
    case GUEST:
      return {
        ...state,
        data: 'guest'
      }
    default:
      return state
  }
}