import data from '../data/movies.json'
import tagsList from '../data/tags.json'

const movies = data.sort((a, b) => a.name.localeCompare(b.name))

const initialState = {
  moviesData: movies,
  tagsList: tagsList,
  tag: 1
}

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case 'movies/TAG':
      return {
        ...state,
        tag: action.value
      }
    default:
      return state
  }
}

export default reducer