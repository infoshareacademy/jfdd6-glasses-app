import React from 'react'
import SearchBar from './movies-search-bar'
import Tags from './movies-tags'
import MovieList from './movies-list'
import {Grid} from 'react-bootstrap'

const MoviesView = () => (
  <Grid className="movies-container">
    <SearchBar />
    <Tags />
    <MovieList />
  </Grid>
)

export default MoviesView
