import React from 'react'
import { Form, ControlLabel, Button, FormControl, FormGroup } from 'react-bootstrap'

import { fetchLocation } from '../../state/home-fetch-location'

export default connect(
  state=> ({
    address: state.address
  }),
  dispatch=> ({
    fetchLocationHelper: (address) => dispatch(fetchLocation(address))
  })
)(

class HomeLocation extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      address: ''
    }
  }

 componentWillMount() {
   this.props.fetchLocationHelper()
 }

  render() {
    return this.props.address.location === null ?
      <Form inline>
        <FormControl
          id="addressField"
          type="text"
          placeholder="Twoja lokalizacja"
        />
        {' '}
        <Button
          id="confirmBtn"
          type="submit"
        >
          Potwierdź
        </Button>
      </Form : ''
  }
})