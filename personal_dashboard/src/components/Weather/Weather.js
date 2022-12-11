
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import React, { useState } from 'react';
import "./ForecastModal.module.css"




const Weather = (props) => {
    const [forecast, setForecast] = useState(false);

    const customStyles = {
        fontFamily:  'Helvetica, sans-serif',
        gradientStart:  '#0181C20',
        gradientMid:  '#04A7F90',
        gradientEnd:  '#4BC4F70',
        locationFontColor:  '#FFF',
        todayTempFontColor:  '#FFF',
        todayDateFontColor:  '#B5DEF4',
        todayRangeFontColor:  '#B5DEF4',
        todayDescFontColor:  '#B5DEF4',
        todayInfoFontColor:  '#B5DEF4',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#439CEA0',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#FFF',
        forecastDescColor:  '#FFF',
        forecastRangeColor:  '#FFF',
        forecastIconColor:  '#FFF',
    };
   
      const { data, isLoading, errorMessage } = useOpenWeather({
        key: `${process.env.REACT_APP_WEATHER_API}`,
        lat: `${props.lat}`,
        lon: `${props.lon}`,
        lang: 'en',
        unit: 'imperial', // values are (metric, standard, imperial)
      });
      return (
        <div onClick={()=> setForecast(!forecast)} className="weatherbox">
        <ReactWeather
        theme={customStyles}
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel={props.name}
          unitsLabels={{ temperature: 'F', windSpeed: 'Km/h' }}
          showForecast={forecast}
        />
        </div>
      );
    
    };

export default Weather