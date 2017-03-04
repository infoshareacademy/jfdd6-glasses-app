import movies from '../data/movies.json'

const initialState = {
  moviesData: movies
}

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case 'TODO':
      return {

      }
    default:
      return state
  }
}

export default reducer