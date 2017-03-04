import data from '../data/movies.json'

const movies = data.sort((a, b) => a.name.localeCompare(b.name))

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