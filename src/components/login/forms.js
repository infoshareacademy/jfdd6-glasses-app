import React from 'react'
import {connect} from 'react-redux'
import {ControlLabel, HelpBlock, FormControl, FormGroup} from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


export default connect(
  state => ({}),
  dispatch => ({})
)(FieldGroup)