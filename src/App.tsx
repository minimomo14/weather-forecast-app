import React from 'react';
import './App.css';
import WeatherForecast from './components/WeatherForecast';
import WeatherMap from './components/WeatherMap';
import "./components/Style.css"

function App() {
  return (
    <div className="App">
      <WeatherForecast />
      <WeatherMap />

    </div>
  );
}

export default App;
