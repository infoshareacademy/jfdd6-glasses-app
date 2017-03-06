import movie from '../data/movies.json'

const initialState = {
  movieData: movie
}


export default (state = initialState, action = {}) => {
  switch (action.type) {

    default:
      return state
  }
}

