import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import { addMovie } from '../../state/userLogin'

const MovieList = ({movies, customTags, query, queryTag, session, user, addMovie}) => (
  <div>
    {
      movies.length === 0
        ?
        <p>Ładowanie…</p>
        :
        movies
          .filter(movie =>
            movie.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
          )
          .filter(movie =>
            queryTag > 0 ? movie.tags.indexOf(queryTag) !== -1 : true
          )
          .filter(movie =>
            customTags.every(tag =>
              movie.tags.indexOf(tag) !== -1
            )
          )
          .map(movie => (
              <div key={movie.id} className="movies-list-movie col-xs-12 col-sm-6 col-lg-4 movies-no-padding">
                <div className="movies-spaced-list">
                  <Link to={'/movie/' + movie.id}>
                    <img src={movie.pics[0]} alt={movie.name}/>
                    {movie.name}
                    <br/>
                    <span className="movies-original-title">({movie.originalTitle})</span>
                    <br/>
                    <Button bsSize="xsmall" onClick={ () => addMovie(user.id, user.movies.concat(movie.id), session.id) }>Dodaj do swojej listy</Button>
                  </Link>
                </div>
              </div>
            )
          )
    }
  </div>
)

export default connect(
  state => ({
    movies: state.movies.moviesData,
    customTags: state.moviesFilters.customTags,
    query: state.moviesFilters.query,
    queryTag: state.moviesFilters.queryTag,
    session: state.session.data,
    user: state.userLogin.data
  }),
  dispatch => ({
    addMovie: (userId, userMovies, accessToken) => dispatch(addMovie(userId, userMovies, accessToken))
  })
)(MovieList)

