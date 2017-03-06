import React from 'react'
import SearchBar from './movies-search-bar'
import Tags from './movies-tags'
import MovieList from './movies-list'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const MoviesView = () => (
  <div>
    <SearchBar />
    <Tags />
    <MovieList />
  </div>
)

export default MoviesView
