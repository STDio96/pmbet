import React from 'react'
import WeatherCard from './WeatherCard';

class WeatherList extends React.Component {
    render() {
        return <ul>
            {this.props.weatherData.map((card) => {
                return <WeatherCard key={card.id} cardData={card} />
            })}
        </ul>
    }
}

/* const WeatherList = ({ weatherData }) => (
    <ul>
        {weatherData.map((card) => {
            return <WeatherCard key={card.id} cardData={card} />
        })}
    </ul>
) */

export default WeatherList;
