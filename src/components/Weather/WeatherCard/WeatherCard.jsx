import React from 'react';
import convertDate from '../helpers/convertDate';
import getDirectionImg from '../helpers/windDirection';
import getIcon from '../helpers/descIcons';
import './WeatherCard.css'

class WeatherCard extends React.Component {
    render() {
        let { cardData } = this.props;

        return <div className="card col-3"/*  style={cardStyles} */>
            <div className="card-body">
                <h5 className="card-title">{convertDate(cardData.date)}</h5>
                <div id="img-container">
                    <img src={getIcon(cardData.description)} />
                    &nbsp;
                    <span className="value">{cardData.description}</span>
                </div>
                <p className="card-text">Влажность: <span className="value">{cardData.humidity} %</span></p>
                <p className="card-text">Атм. давление: <span className="value">{cardData.pressure} мм рт. ст.</span></p>
                <p className="card-text">Максимум: <span className="value">{cardData.tMax} °C</span>, Минимум: <span className="value">{cardData.tMin} °C</span></p>
                <p className="card-text">Ветер: <span className="value">{getDirectionImg(cardData.windDirection)} {cardData.windSpeed} м/c</span></p>
            </div>
        </div>
    }
}

export default WeatherCard;
