import React from 'react';
import convertDate from '../helpers/convertDate';
import getIcon from '../helpers/descIcons';

const WeatherCard = ({ cardData }) => {
    return <li>
        {cardData.windSpeed} {cardData.windDirection}
        <img src={getIcon(cardData.description)} width='32' />
        {cardData.description}
        {cardData.pressure}: {convertDate(cardData.date)}
    </li>
}

export default WeatherCard;
