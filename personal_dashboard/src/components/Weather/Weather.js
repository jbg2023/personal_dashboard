import React, { useState, useEffect } from 'react'


const Weather = () => {
    const [weather, setWeather] = useState({});
    const [location, setLocation]= useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [city, setCity] = useState('')
    
    const getWeather = () => {
       
      setIsLoading(true);
     
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '3453d15b4dmshb82b103646545cfp12cec7jsn87a0e7f11576',
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
      };
    
      fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options)
      .then(response =>  response.json())
      .then(response => {
        console.log(response)
        setLocation(response.location) 
        setWeather(response.current_observation.condition)
    })
      .catch(err => console.error(err));
      setIsLoading(false);
      setCity('')
  }



    useEffect(() => {
      getWeather()
    }, [])
    
    
       
          return (
                <>
                <div>
                <input 
                type="text"
                value={city}
                onChange={event => setCity(event.target.value)} 
                placeholder='Enter City Name'
                />
                <button onClick={getWeather}>search</button>
                </div>

                <>{!isLoading && <h3>{location.city} , {location.region}</h3>}</>
                <img width={70}src="/icons/weather_icons/03d.png"/>
                <>{!isLoading && <h3>{weather.temperature} &#8457;</h3>}</>
                <>{!isLoading && <h3>{weather.text}</h3>}</>
                
                {isLoading && <p>Loading...</p>}
                </>
              )
            
          
        }
      

export default Weather