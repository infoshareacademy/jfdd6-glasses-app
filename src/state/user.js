import users from '../data/users.json'
import moviesList from  '../data/movies.json'


const initialState = {
  userData: users,
  moviesList: moviesList
}

export default (state = initialState, action = {}) => {
  switch (action.type) {

    default:
      return state
  }
}
