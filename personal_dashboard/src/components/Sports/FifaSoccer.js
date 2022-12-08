import React from 'react'
import { useState, useEffect } from 'react';
import "./Sports.css"

const logos = [
    {
        name:'Qatar',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Qatar_%283-2%29.svg/1024px-Flag_of_Qatar_%283-2%29.svg.png',
    },
    {
        name:'Ecuador',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/800px-Flag_of_Ecuador.svg.png?20140720204051',
    },
    {
        name:'Senegal',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/2560px-Flag_of_Senegal.svg.png',
    },
    {
        name:'Netherlands',
        logo:'https://upload.wikimedia.org/wikipedia/commons/b/b2/Flag_of_the_Netherlands.png',
    },
    {
        name:'England',
        logo:'https://upload.wikimedia.org/wikipedia/commons/e/ef/England_flag.png',
    },
    {
        name:'Iran',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/2560px-Flag_of_Iran.svg.png',
    },
    {
        name:'Usa',
        logo:'https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png',
    },
    {
        name:'Wales',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/2560px-Flag_of_Wales.svg.png',
    },
    {
        name:'Argentina',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2560px-Flag_of_Argentina.svg.png',
    },
    {
        name:'Saudi Arabia',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1280px-Flag_of_Saudi_Arabia.svg.png',
    },
    {
        name:'Mexico',
        logo:'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Mexico.png',
    },
    {
        name:'Poland',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/2560px-Flag_of_Poland.svg.png',
    },
    {
        name:'France',
        logo:'https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png',
    },
    {
        name:'Australia',
        logo:'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1280px-Flag_of_Australia.svg.png',
    },
    {
        name:'Denmark',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1280px-Flag_of_Denmark.svg.png',
    },
    {
        name:'Tunisia',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/2560px-Flag_of_Tunisia.svg.png',
    },
    {
        name:'Spain',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png',
    },
    {
        name:'Costa Rica',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/1280px-Flag_of_Costa_Rica_%28state%29.svg.png',
    },
    {
        name:'Germany',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png',
    },
    {
        name:'Japan',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png',
    },
    {
        name:'Belgium',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/2363px-Flag_of_Belgium.svg.png',
    },
    {
        name:'Canada',
        logo:'https://upload.wikimedia.org/wikipedia/commons/b/b6/Flag_of_Canada.png',
    },
    {
        name:'Morocco',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/2560px-Flag_of_Morocco.svg.png',
    },
    {
        name:'Croatia',
        logo:'https://upload.wikimedia.org/wikipedia/commons/1/18/Flag_of_Croatia.png',
    },
    {
        name:'Brazil',
        logo:'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png',
    },
    {
        name:'Serbia',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/2560px-Flag_of_Serbia.svg.png',
    },
    {
        name:'Switzerland',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/512px-Flag_of_Switzerland.svg.png',
    },
    {
        name:'Cameroon',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/2560px-Flag_of_Cameroon.svg.png',
    },
    {
        name:'Portugal',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2560px-Flag_of_Portugal.svg.png',
    },
    {
        name:'Ghana',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1280px-Flag_of_Ghana.svg.png',
    },
    {
        name:'Uruguay',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/640px-Flag_of_Uruguay.svg.png',
    },
    {
        name:'South Korea',
        logo:'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_South_Korea.png',
    },
]

function Fifa() {
    const [ sports, setSports ] = useState(null)
    
    const showSports = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2015809037mshf97dd2a34293d90p144073jsn9507263ce2f7',
                'X-RapidAPI-Host': 'odds.p.rapidapi.com'
            }
        };
        fetch(`https://odds.p.rapidapi.com/v4/sports/soccer_fifa_world_cup/scores?daysFrom=3`, options)
            .then(response => response.json())
            .then(response => {
                setSports(response)
                console.log(response)                    
            })
            .catch(console.error);
    }
    useEffect(() => {
        showSports()
    }, [])
    if(!sports){
        return (
            <p>Loading....</p>
        )
    } 
  return (
    <div className='sportslide'>
    <h1 className='sportsmain' id='FIFA'>FIFA 2022 World Cup</h1>
    <div className='sportscontainer'>
        <div className='slide'>
                {sports.map(sport => {
                    if(sport.completed === true){
                        return (
                            <>
                                {logos.map(e => {
                                        if(e.name === sport.home_team){
                                            return (
                                                <div className='homeshirt'>
                                                    <img src={e.logo} alt={e.name}/>
                                                    <p>{sport.home_team}</p>
                                                </div>
                                            )
                                        }
                                    })}
                                <div className='score'>
                                    <p>Date Played:</p>
                                    {sport.commence_time.substring(0,10)}
                                    <p>Scores</p>
                                    {sport.scores[1].score} - {sport.scores[0].score}
                                    <p className='gamestatusfinished'>Game Complete</p>
                                </div>
                                
                                    {logos.map(e => {
                                        if(e.name === sport.away_team){
                                            return (
                                                <div className='awayshirt'>
                                                    <img src={e.logo} alt={e.name}/>
                                                    <p>{sport.away_team}</p>
                                                </div>
                                            )
                                        }
                                    })}
                            </>
                            )
                        }
                        if(sport.completed === false){
                            return (
                                <>
                                    {logos.map(e => {
                                            if(e.name === sport.home_team){
                                                return (
                                                    <div className='homeshirt'>
                                                        <img src={e.logo} alt={e.name}/>
                                                        <p>{sport.home_team}</p>
                                                    </div>
                                                )
                                            }
                                        })}
                                    <div className='score'>
                                        <p>Date Played:</p>
                                        {sport.commence_time.substring(0,10)}
                                        <p className='gamestatus'>Upcoming Game</p>
                                    </div>
                                    
                                        {logos.map(e => {
                                            if(e.name === sport.away_team){
                                                return (
                                                    <div className='awayshirt'>
                                                        <img src={e.logo} alt={e.name}/>
                                                        <p>{sport.away_team}</p>
                                                    </div>
                                                )
                                            }
                                        })}
                                </>
                                )
                        } 
                    })}
        </div>
    </div>
</div>
  )
}
export default Fifa