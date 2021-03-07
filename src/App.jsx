import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import WeatherList from './components/WeatherList';
import weatherData from './helpers/weatherData.json';

function App() {
  return (
    <div>
      <h1 className="text-center">Погода :)</h1><hr />
      <WeatherList weatherData={weatherData} />
    </div>
  );
}

export default App;
