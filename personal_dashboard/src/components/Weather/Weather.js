import React, { useState, useEffect } from 'react'

const Weather = () => {
    const [weather, setWeather] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    
    const getWeather = () => {
      setIsLoading(true);
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '3453d15b4dmshb82b103646545cfp12cec7jsn87a0e7f11576',
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
      };
    
      fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Seattle&format=json&u=f', options)
      .then(response =>  response.json())
      .then(response => {
        console.log("data", response)
        
      setWeather(response.current_observation.condition)
    })
      .catch(err => console.error(err));
      setIsLoading(false);
  }
    useEffect(() => {
      getWeather()
    }, [])
    
    
       
          return (
                <>
                
                <>{!isLoading && <h3>{weather.temperature} &#8457;</h3>}</>
                <>{!isLoading && <h3>{weather.text}</h3>}</>
                {isLoading && <p>Loading...</p>}
                </>
              )
            
  
        }
      

export default Weather