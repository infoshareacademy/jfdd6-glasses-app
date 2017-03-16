import React from 'react'
import {connect} from 'react-redux'
import InputRange from 'react-input-range'

import { slide } from '../../state/home-filters'

class HomeSlider extends React.Component {
    render() {
      return (
        <div>
          <InputRange
            //disabled
            maxValue={3000}
            minValue={0}
            step={250}
            value={this.props.rangeValue}
            formatLabel={(value) => `${value} m`}
            onChange={(value) => this.props.slide(value)}
          />
          <br />
        </div>
      )
    }
  }

export default connect(
  state => ({
    rangeValue: state.homeFilters.value
  }),
  dispatch => ({
    slide: (value) => dispatch(slide(value))
  })
)(HomeSlider)

