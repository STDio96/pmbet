import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard';

class WeatherList extends React.Component {
    render() {
        const styles = {
            margin: "0 auto",
            width: "1070px",
            justifyContent: "center",
            marginTop: "15px"
        }

        return <div className="row" style={styles}>
            {this.props.weatherData.map((card) => {
                return <WeatherCard key={card.id} cardData={card} />
            })}
        </div>
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
