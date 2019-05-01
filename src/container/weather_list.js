import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.weathers.name}</h1>
        <h2>Temp: {Math.floor(this.props.weathers.main.temp)}°</h2>
        <h3>Condition: {this.props.weathers.weather[0].description}</h3>
        <h3>Humidity:{this.props.weathers.main.humidity}</h3>
      </div>
    )
  }
}

export default connect()(WeatherList);