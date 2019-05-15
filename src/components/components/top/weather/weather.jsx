import React from 'react';
import './weather.scss';

export default class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { localTime, region, location, temp_c, text, iconURL} = this.props

        return (
        <div className="weather-container">
        <div className="header">{location}</div>
        <div className="header">{region}</div>
        <div className="header">{localTime}</div>
            <div className="inner-container">
                <div className="image">
                    <img src={iconURL} alt="weather"/>
                </div>
                <div className="current-weather">{temp_c}°C</div>
            </div>
        <div className="footer">{text}</div>
        </div>
        );
    }
}