import React, {Component} from 'react';
import './App.scss';

import TopSection from '../components/components/top/top';
import BottomSection from '../components/components/bottom/bottom';
import axios from 'axios';

const WEATHER_KEY = "0513f30bf93648c1b3d103505191305";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: 'Niš',
      numForecastDays: '4',
      isLoading: true
    }
  }

  updateWeather() {
    
    const { cityName, numForecastDays } = this.state;
    
    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${numForecastDays}`
    axios.get(URL).then((res)=>{
      return res.data;
    }).then((data) => {
      this.setState({temp_c: data.current.temp_c, 
          isDay: data.current.is_day, 
          text: data.current.condition.text, 
          iconURL: data.current.condition.icon,
          region: data.location.region,
          localTime: data.location.localtime,
          forecastdays: data.forecast.forecastday,
          isLoading: false});
    }).catch((err) => {
      if(err)
      console.error("Cant fetch Data from API", err);
    });
  
  }

  componentDidMount() {
    const { EventEmitter } = this.props;

    this.updateWeather();

    EventEmitter.on("updateWeather", data => {
      this.setState({cityName: data}, () => this.updateWeather());
    });
  }

  render() {
    const {forecastdays, region, localTime, isLoading, cityName, temp_c, text, iconURL, isDay} = this.state;

    return (
    <div className="app-container">
    <div className="main-container">
    {isLoading && <div className="loader"/>}
      {!isLoading &&
        <div className="top-section">
          <TopSection 
          region={region}
          localTime={localTime}
          isDay={isDay} 
          location={cityName} 
          temp_c={temp_c} 
          text={text} 
          iconURL={iconURL}
          EventEmitter={this.props.EventEmitter} />
        </div>
      }
        <div className="bottom-section">
          <BottomSection forecastdays={forecastdays}/>
        </div>
      </div> 
    </div>
    );
  }
}

export default App;
