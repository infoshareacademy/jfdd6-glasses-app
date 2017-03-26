import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { toggleMovie } from '../../state/userLogin'

class MovieList extends React.Component {
  render() {
    const {movies, customTags, query, queryTag, session, user, toggleMovie} = this.props
    const tooltip = (
      <Tooltip id="tooltip">
        Dodaj do swojej listy
      </Tooltip>
    )

    return (
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
                        {user === null || user.movies.includes(movie.id) ? null
                          :
                          <OverlayTrigger
                            placement="bottom"
                            overlay={tooltip}
                            trigger={['hover']}
                            delay={100}

                          >
                          < Button bsSize="xsmall"
                                   bsStyle="info"
                                   className="movies-list-button movies-list-button-add"
                                   onClick={
                                     (event) => {
                                       event.preventDefault()
                                       return toggleMovie(user.id,
                                         user.movies.includes(movie.id) ? user.movies : user.movies.concat(movie.id),
                                         session.id)
                                     }
                          }>+</Button>
                          </OverlayTrigger>
                        }
                      </Link>
                    </div>
                  </div>
                )
              )
        }
      </div>
    )
  }
}

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
    toggleMovie: (userId, userMovies, accessToken) => dispatch(toggleMovie(userId, userMovies, accessToken))
  })
)(MovieList)

