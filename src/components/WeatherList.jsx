import React from 'react'
import WeatherCard from './WeatherCard';

const WeatherList = ({ weatherData }) => (
    <ul>
        {weatherData.map((card) => {
            return <WeatherCard key={card.id} cardData={card} />
        })}
    </ul>
)

export default WeatherList;
