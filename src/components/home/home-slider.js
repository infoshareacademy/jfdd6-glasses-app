import React from 'react'
import { connect } from 'react-redux'
import InputRange from 'react-input-range'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { slide } from '../../state/home-filters'

class HomeSlider extends React.Component {
  render () {
    const tooltip = (
      <Tooltip id="tooltip">
        Zmień dystans pomiędzy Twoją lokalizacją a wydarzeniem.
      </Tooltip>
    )
    return (
      <OverlayTrigger
        placement="bottom"
        overlay={tooltip}
        trigger={['hover']}
        delay={100}

      >
        <div>

          <InputRange
            //disabled
            maxValue={3000}
            minValue={0}
            step={250}
            value={this.props.rangeValue}
            formatLabel={(value) => `${value / 1000} km`}
            onChange={(value) => this.props.slide(value)}
          />
          <br />
        </div>
      </OverlayTrigger>
    )
  }
}

export default connect(
  state => ({
    rangeValue: state.eventsFilters.value
  }),
  dispatch => ({
    slide: (value) => dispatch(slide(value))
  })
)(HomeSlider)

