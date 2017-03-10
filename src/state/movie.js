const FETCH__BEGIN = 'movie/FETCH__BEGIN';
const FETCH__SUCCESS = 'movie/FETCH__SUCCESS';
const FETCH__FAIL = 'movie/FETCH__FAILED';

export const fetchMovie = () => dispatch => {

  dispatch({type: FETCH__BEGIN});

  return fetch(
    process.env.PUBLIC_URL + '/data/movies.json'
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
  error: null
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