import React from 'react';
import './bottom.scss';
import ForecastDays from './forecastDay/forecastDay';

export default class BottomSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {forecastdays} = this.props;

        return (
            <div className="bottom-container">
                <div className="inner-container">
                {forecastdays && 
                    forecastdays.map((data, idx) => {
                    return <ForecastDays date={data.date} day={data.day} key={idx} />
                })}  
                </div>
            </div>  
        );
    }
}