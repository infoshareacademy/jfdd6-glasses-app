import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

class Tags extends React.Component {

  showTags() {
    document.getElementById('tags-list').style.display = 'block'
    document.getElementById('tags-turn-on').style.display = 'none'
    document.getElementById('tags-turn-off').style.display = 'block'
  }

  hideTags() {
    document.getElementById('tags-list').style.display = 'none'
    document.getElementById('tags-turn-on').style.display = 'block'
    document.getElementById('tags-turn-off').style.display = 'none'
  }

  render() {
    const {tags, customTags, sendTag, removeTag, resetTags} = this.props

    return (
      <div className="movies-tags">
        <div id="tags-turn-on">
          <Button
            bsStyle="info"
            bsSize="small"
            className="movies-tag-button movies-tag-button-reset"
            onClick={this.showTags}
          >Pokaż filtry</Button>
        </div>

        <div id="tags-turn-off">
          <Button
            bsStyle="info"
            bsSize="small"
            className="movies-tag-button movies-tag-button-reset"
            onClick={this.hideTags}
          >Ukryj filtry</Button>
        </div>

        <div id="tags-list">
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
          >Usuń wybrane filtry</Button>
        </div>
      </div>
    )
  }
}

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