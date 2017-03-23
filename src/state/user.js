const FETCH__BEGIN = 'users/FETCH__BEGIN';
const FETCH__SUCCESS = 'users/FETCH__SUCCESS';
const FETCH__FAIL = 'users/FETCH__FAILED';

export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCH__BEGIN });

  return fetch(
    // process.env.PUBLIC_URL + '/data/users.json'
    'https://mysterious-lake-35712.herokuapp.com/api/users?access_token=ABC1'
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
};

const initialState = {
  data: null,
  fetching: false,
  error: null,

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH__BEGIN:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH__SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false
      };
    case FETCH__FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    default:
      return state
  }
}