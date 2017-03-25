const FETCH__BEGIN = 'event/FETCH__BEGIN'
const FETCH__SUCCESS = 'event/FETCH__SUCCESS'
const FETCH__FAIL = 'event/FETCH__FAILED'

import { fetchData } from './home-fetch'

export const addEvent = (id, userSessionId, valueData, valueTime, eventDescription, userSessionToken) => dispatch => {
  return fetch(
    'https://mysterious-lake-35712.herokuapp.com/api/events/?access_token=' + userSessionToken, {
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
          data => {
            dispatch({
              type: FETCH__SUCCESS,
              data
            })
            dispatch(fetchData())
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
};

export const addUser = (userSessionId, userSessionToken, id) => dispatch => {
  return fetch(
    console.log(userSessionId, userSessionToken, id),
    'https://mysterious-lake-35712.herokuapp.com/api/events/?access_token=nkIfWmsgiSRV3uRe2gPiKjUP2Fb7RUeDWyNHHYV5UjyH46ma5GDe2MEb9BND2f1F',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "id": 58,
          "desc": 'dupa'
        }
      )
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
            dispatch(fetchData())
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
};
