import React from 'react';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import PreviousWeather from './components/previousWeather/PreviousWeather';

function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <PreviousWeather />
    </div>
  );
}

export default App;
