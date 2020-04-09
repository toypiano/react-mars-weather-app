import React, { useEffect } from 'react';
import { useAppDispatch, useAppState } from './store';
import { formatDate, formatTemp, formatSpeed } from './utils/formatters';
import { actionTypes } from './store/actions';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import PreviousWeather from './components/previousWeather/PreviousWeather';
import weatherData from './store/weatherData.json';

// const API_KEY = 'DEMO_KEY';
// const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

function App() {
  const { weathers, selectedWeatherIndex, isMetric } = useAppState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      // const response = await fetch(API_URL);
      // const data = await response.json();
      const data = weatherData;
      if (!ignore) {
        dispatch({
          type: actionTypes.FETCH_WEATHERS_SUCCESS,
          payload: data,
        });
      }
    }
    fetchData();
    return () => {
      // prevent dispatching stale payload
      // https://codesandbox.io/s/react-doc-example-fetching-with-hook-eqldp?file=/src/index.js
      ignore = true;
    };
  }, [dispatch]);

  // format all weather data as components need them to be
  // because if user changes unit, we have to re-render all nested components
  // and all components uses weather data in the same format
  const formattedWeathers = weathers.map((weather) => ({
    ...weather,
    maxTemp: formatTemp(weather.maxTemp, isMetric),
    minTemp: formatTemp(weather.minTemp, isMetric),
    windSpeed: formatSpeed(weather.windSpeed, isMetric),
    date: formatDate(weather.date),
  }));

  const selectedFormattedWeather =
    formattedWeathers[selectedWeatherIndex] || {}; // [][null] returns `undefined`

  return (
    <div className="App">
      <CurrentWeather weather={selectedFormattedWeather} />
      <PreviousWeather weathers={formattedWeathers} />
    </div>
  );
}

export default App;
