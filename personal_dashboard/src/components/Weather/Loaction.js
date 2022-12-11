import React, { useState }from 'react'
import Weather from './Weather';
import "./ForecastModal.module.css"

const Loaction = () => {
    const [city, setCity] = useState('');
    const [longitude, setLong] = useState('');
    const [lat, setLat] = useState('')
    const [name, setName] = useState ('');
    const [isLoading, setIsLoading] = useState(false);

  
    const url= `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}`

    const getLocation = (event) => {
        
        if(event.key === 'Enter'){
        setIsLoading(true);
        fetch(url).then(response => response.json()).then(response => {
            setLong(response[0].lon)
            setLat(response[0].lat)
            setName(response[0].name)
          
    })
    .catch(err => console.error(err));
    setIsLoading(false);
    setCity('')
}
    }


  return (
    <div>
      
    
          
        
            <input 
              type="text"
              onKeyDown={getLocation}
              value={city}
              onChange={event => setCity(event.target.value)} 
              placeholder='Enter City Name'
            />
    <Weather lat={lat} lon={longitude} name={name}/>
    </div>
  )
}

export default Loaction