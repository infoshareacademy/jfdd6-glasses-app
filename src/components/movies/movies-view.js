import React from 'react'
import SearchBar from './movies-search-bar'
import Tags from './movies-tags'
import MovieList from './movies-list'
import {Grid} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './movies-style.css'


const MoviesView = () => (
  <Grid className="movies-container">
    <SearchBar />
    <Tags />
    <MovieList />
  </Grid>
)

export default MoviesView
