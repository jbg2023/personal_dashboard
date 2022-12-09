
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import React, { useState } from 'react';




const Weather = (props) => {
    const [forecast, setForecast] = useState(true);

    const customStyles = {
        fontFamily:  'Helvetica, sans-serif',
        gradientStart:  '#0181C265',
        gradientMid:  '#04A7F965',
        gradientEnd:  '#4BC4F765',
        locationFontColor:  '#FFF',
        todayTempFontColor:  '#FFF',
        todayDateFontColor:  '#B5DEF4',
        todayRangeFontColor:  '#B5DEF4',
        todayDescFontColor:  '#B5DEF4',
        todayInfoFontColor:  '#B5DEF4',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#439CEA65',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#FFF',
        forecastDescColor:  '#FFF',
        forecastRangeColor:  '#FFF',
        forecastIconColor:  '#FFF',
    };
   
      const { data, isLoading, errorMessage } = useOpenWeather({
        key: '9493340bcdeabdb3bd334c664f543c59',
        lat: `${props.lat}`,
        lon: `${props.lon}`,
        lang: 'en',
        unit: 'imperial', // values are (metric, standard, imperial)
      });
      return (
        <div onClick={()=> setForecast(!forecast)}>
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