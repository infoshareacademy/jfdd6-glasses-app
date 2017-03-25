const FETCH__BEGIN = 'readEvent/FETCH__BEGIN'
const FETCH__SUCCESS = 'readEvent/FETCH__SUCCESS'
const FETCH__FAIL = 'readEvent/FETCH__FAILED'

export const fetchreadEvent = () => dispatch => {
  dispatch({type: FETCH__BEGIN})
  return fetch(
    'https://mysterious-lake-35712.herokuapp.com/api/events'
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
    default:
      return state
  }
}

export const addEvent = (id, userSessionId, valueData, valueTime, eventDescription, userSessionToken) => {
  return fetch(
    'https://mysterious-lake-35712.herokuapp.com/api/events/' + '?access_token=' + userSessionToken, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "movieId": id,
          "start": valueData + "T" + valueTime,
          "desc": eventDescription,
          "location": {
            "lat": 54.39680015470991,
            "lng": 18.590085984324105
          },
          "host": userSessionId,
          "guests": [],
          "limit": 5,
          "comment": ""
        }
      )
    }
  ).then(
    response => {
      if (response.ok) {
        return response.json().then(
          data =>
            console.log(data.id)
        )
      }
    })
};

export const addUser = (id) => {
  return fetch(
    'http://localhost:3010/events/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "guests": [10, 8, 5, 9],
        }
      )
    }
  ).then(
    response => {
      if (response.ok) {
        return response.json().then(
          data =>

            console.log(data.id, data),
        )
      }
    })
}