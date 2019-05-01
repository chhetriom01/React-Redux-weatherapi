import React, {Component} from 'react';
import SearchBar from '../container/search_bar'
import WeatherList from '../container/weather_list'
import { connect } from 'react-redux';

 class App extends Component {
  render() {
    return (
      <div>
          <SearchBar />
          {this.props.weather.map((post,i) => (
                  <WeatherList key={i} weathers={post} />
                ))}

          {/* <WeatherList weather={post}/> */}
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return{
    weather:state
    
  };
};

export default connect (mapStateToProps)(App)
