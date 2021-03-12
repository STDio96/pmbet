import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

import WeatherList from './WeatherList/WeatherList';
import weatherData from './helpers/weatherData.json';

function Weather() {
  return (
    <div>
      <h1 className="text-center">Погода :)</h1><hr />
      <WeatherList weatherData={weatherData} />
    </div>
  );
}

export default Weather;
