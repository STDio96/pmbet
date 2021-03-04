import logo from './logo.svg';
import './App.css';

import WeatherList from './components/WeatherList';
import weatherData from './helpers/weatherData.json';

function App() {
  return (
      <WeatherList weatherData={weatherData} />
  );
}

export default App;
