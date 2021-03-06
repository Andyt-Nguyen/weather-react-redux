import React, { Component } from 'react';
import SearchBar from './Components/Containers/SearchBar';
import WeatherList from './Components/Containers/WeatherList'
class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
				<WeatherList />
      </div>
    );
  }
}

export default App;
