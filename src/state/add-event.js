const FETCH__BEGIN = 'readEvent/FETCH__BEGIN'
const FETCH__SUCCESS = 'readEvent/FETCH__SUCCESS'
const FETCH__FAIL = 'readEvent/FETCH__FAILED'

export const fetchreadEvent = () => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    'http://localhost:3010/posts/'
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

export const addEvent = (id) => {
  return fetch(
    'http://localhost:3010/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "movieId": 20,
          "start": "2017-04-30T12:30:00",
          "desc": "Napięcie i emocje większe niż podczas meczu",
          "location": {
            "lat": 54.39680015470991,
            "lng": 18.590085984324105
          },
          "host": id,
          "guests": [10,7,11,9],
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

            location.href = "http://localhost:3000/event/" + data.id,
        )
      }
    })
}

export const addUser = (id) => {
  return fetch(
    'http://localhost:3010/events/'+ id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "movieId": 20,
          "start": "2017-04-30T12:30:00",
          "desc": "Napięcie i emocje większe niż podczas meczu",
          "location": {
            "lat": 54.39680015470991,
            "lng": 18.590085984324105
          },
          "host": id,
          "guests": [10,8,11,9],
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

            console.log(data.id, data),
        )
      }
    })
}