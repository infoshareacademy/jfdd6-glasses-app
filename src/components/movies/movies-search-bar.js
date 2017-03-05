import React from 'react'
import {Col, FormControl} from 'react-bootstrap'

const SearchBar = () => (
  <Col xs={8} xsOffset={2}>
    <form>
      <FormControl type="text" placeholder="text" />
    </form>
  </Col>
)

export default SearchBar
