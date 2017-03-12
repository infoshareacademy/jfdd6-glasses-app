import React from 'react'
import InputRange from 'react-input-range'

class HomeSlider extends React.Component {
  constructor(props){
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
          value={this.state.value}
          formatLabel={(value) => `${value} m`}
          onChange={(value) => this.setState({value})}
        />
        <br />
      </div>
    )
  }
}

export default HomeSlider




