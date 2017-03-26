import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { connect } from 'react-redux'

import { fetchLocation } from '../../state/home-fetch-location'

export default connect(
  state => ({}),
  dispatch => ({
    fetchLocationHelper: address => dispatch(fetchLocation(address))
  })
)(
  class HomeLocation extends React.Component {
    render () {
      return (
        <form className="home-location"  onSubmit={(event) => {
          event.preventDefault()
          this.props.fetchLocationHelper(this.address.value || 'Gdańsk, Hynka 5')
        }}>
          <InputGroup>
            <FormControl
              type="text"
              inputRef={input => this.address = input}
              placeholder="Gdańsk, Hynka 5"
            />
            {' '}
            <InputGroup.Button >
              <Button type="submit">OK</Button>
            </InputGroup.Button>
          </InputGroup>
        </form>

      )
    }
  })