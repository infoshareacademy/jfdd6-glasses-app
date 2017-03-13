import React from 'react'
import {connect} from 'react-redux'
import InputRange from 'react-input-range'

export default connect(
  state => ({
    rangeValue: state.range.value
  }),
  dispatch => ({
    updateRangeValue: (value) => dispatch({ type: 'range/CHANGE', value})
  })
)(
  class HomeSlider extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        value: 500
      }
    }

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
            onChange={(value) => this.props.updateRangeValue(value)}
          />
          <br />
        </div>
      )
    }
  }
)





