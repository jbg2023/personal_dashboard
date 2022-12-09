import React, { useState, useEffect }from 'react'
import Weather from './Weather';
import './Location.css'

const Loaction = () => {
    const [city, setCity] = useState('');
    const [longitude, setLong] = useState('');
    const [lat, setLat] = useState('')
    const [name, setName] = useState ('');
    const [isLoading, setIsLoading] = useState(false);

  
    const url= `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=9493340bcdeabdb3bd334c664f543c59`

    const getLocation = () => {
        setIsLoading(true);
        fetch(url).then(response => response.json()).then(response => {
           console.log(response[0].lat.toString())
           console.log(response[0].name)
            setLong(response[0].lon)
            setLat(response[0].lat)
            setName(response[0].name)
          
    })
    .catch(err => console.error(err));
    setIsLoading(false);
    setCity('')
}

useEffect(() => {
    getLocation()
  }, [])
   
  
  return (
    <div>
      <Weather lat={lat} lon={longitude} name={name}/>
    <input className='input'
           
            type="text"
            value={city}
            onChange={event => setCity(event.target.value)} 
            placeholder='Enter City Name'
            />
            <button onClick={getLocation}>search</button>
    </div>
  )
}

export default Loaction