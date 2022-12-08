
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import React, { useState, useEffect } from 'react';




const Weather = (props) => {
   
      const { data, isLoading, errorMessage } = useOpenWeather({
        key: '9493340bcdeabdb3bd334c664f543c59',
        lat: `${props.lat}`,
        lon: `${props.lon}`,
        lang: 'en',
        unit: 'imperial', // values are (metric, standard, imperial)
      });
      return (
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel={props.name}
          unitsLabels={{ temperature: 'F', windSpeed: 'Km/h' }}
          showForecast
        />
      );
    };

export default Weather