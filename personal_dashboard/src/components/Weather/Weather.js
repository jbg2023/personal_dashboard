
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import React, { useState } from 'react';




const Weather = (props) => {
    const [forecast, setForecast] = useState(true);
   
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