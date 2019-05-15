import React from 'react';
import './forecastDay.scss';

export default class ForecastDays extends React.Component {
    constructor(props){
    super(props);
    this.state={}
    }

    render() {
        const {day} = this.props;
        const {date} = this.props;
        return(
            <div className="forecastday-container">
                <div className="date">{date}</div>
                <div className="image">
                <img src={day.condition.icon} alt="day"/>
                </div>
                <div className="text">{day.avgtemp_c}°C</div>
                <div className="muted-text">{day.condition.text}</div>
            </div>
        );
    }


}