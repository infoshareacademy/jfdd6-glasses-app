import React from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

class HomeLocation extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      value: ''
    }
  }

  getValidationState() {
    const length = this.state.value.length
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

export default HomeLocation