import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'

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
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Twoja lokalizacja"
            onChange={this.handleChange}
          />
        </FormGroup>
      </form>
    )
  }
}

HomeLocation.PropTypes = {
  // tbd
}

export default HomeLocation