import React from 'react'
import { Form, ControlLabel, Button, FormControl, FormGroup } from 'react-bootstrap'

class HomeLocation extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      value: ''
    }
  }

  getValidationState() {
    // to be discussed
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
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
      </Form>
    )
  }
}

HomeLocation.PropTypes = {
  // tbd
}

export default HomeLocation