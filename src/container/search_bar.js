import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    };
  }

  onInputChange = (e) => {
    this.setState({
      city: e.target.value
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const value = this.state.city;
    this.props.fetchWeather(value);
  }

  render() {
    return (
      <div>
        <h1>Weather Api from redux</h1>
        <form onSubmit={this.onFormSubmit} >
          <input required type="text" name="city" value={this.state.city} onChange={this.onInputChange} placeholder='enter the city' />
          <button>Submit</button></form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar);

