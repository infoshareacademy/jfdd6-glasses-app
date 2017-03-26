import React from 'react'
import { Button, FormControl, InputGroup, Tooltip, OverlayTrigger } from 'react-bootstrap'
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
      const tooltip = (
        <Tooltip id="tooltip">Podaj lokalizację, w pobliżu której poszukujesz wydarzenia.</Tooltip>
      )
      return (
      <OverlayTrigger
        placement="bottom"
        overlay={tooltip}
        trigger={['hover']}
        delay={100}

      >
        <form
          className="home-location"
          onSubmit={(event) => {
          event.preventDefault()
          this.props.fetchLocationHelper(this.address.value || 'Gdańsk, Hynka 5')
        }}
        >
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
      </OverlayTrigger>
      )
    }
  })