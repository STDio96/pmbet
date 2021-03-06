import React from 'react';
import convertDate from '../helpers/convertDate';
import getIcon from '../helpers/descIcons';

class WeatherCard extends React.Component {
    render() {
        let { cardData } = this.props;

        return <li>
            {cardData.windSpeed} {cardData.windDirection}
            <img src={getIcon(cardData.description)} width='32' />
            {cardData.description}
            {cardData.pressure}: {convertDate(cardData.date)}
        </li>
    }
}

/* const WeatherCard = ({ cardData }) => {
    return <li>
        {cardData.windSpeed} {cardData.windDirection}
        <img src={getIcon(cardData.description)} width='32' />
        {cardData.description}
        {cardData.pressure}: {convertDate(cardData.date)}
    </li>
} */

export default WeatherCard;
