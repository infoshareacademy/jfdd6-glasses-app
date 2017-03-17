import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

const Tags = ({ tags, customTags, sendTag, removeTag, resetTags}) => (
  <div className="movies-tags movies-border">
    {
      tags.length === 0
        ? <p>Ładowanie&hellip;</p>
        :
        tags.map((tag) => (
            customTags.indexOf(tag.id) === -1
              ? <Button
                key={tag.id}
                value={tag.id}
                bsSize="small"
                className="movies-tag-button"
                onClick={() => sendTag(tag.id)}
              >{tag.name}</Button>
              : <Button
                key={tag.id}
                value={tag.id}
                bsStyle="success"
                bsSize="small"
                className="movies-tag-button movies-tag-button-active"
                onClick={() => removeTag(tag.id)}
              >{tag.name}</Button>
          )
        )
    }
    <Button
      bsStyle="info"
      bsSize="small"
      className="movies-tag-button movies-tag-button-reset"
      onClick={() => resetTags()}
    >Usuń filtry</Button>
  </div>
)

export default connect(
  state => ({
    tags: state.movies.tagsList,
    customTags: state.moviesFilters.customTags
  }),
  dispatch => ({
    sendTag: (value) => dispatch({ type: 'movies/tags/CUSTOM', value }),
    removeTag: (value) => dispatch({ type: 'movies/tags/REMOVE', value }),
    resetTags: () => dispatch({ type: 'movies/tags/RESET' })
  })
)(Tags)