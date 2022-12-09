import React from 'react'
import { useState, useEffect } from 'react';
import "./Sports.css"

const logos = [
    {
        name: "Arizona Cardinals",
        logo: "https://loodibee.com/wp-content/uploads/nfl-arizona-cardinals-team-logo-2.png"
    },
    {
        name: "Atlanta Falcons",
        logo: "https://loodibee.com/wp-content/uploads/nfl-atlanta-falcons-team-logo-2.png",
    },
    {
        name: "Carolina Panthers",
        logo: "https://loodibee.com/wp-content/uploads/nfl-carolina-panthers-team-logo-2.png",
    },
    {
        name: "Chicago Bears",
        logo: "https://loodibee.com/wp-content/uploads/nfl-chicago-bears-team-logo-2.png",
    },
    {
        name: "Dallas Cowboys",
        logo: "https://loodibee.com/wp-content/uploads/nfl-dallas-cowboys-team-logo-2.png",
    },
    {
        name: "Detroit Lions",
        logo: "https://loodibee.com/wp-content/uploads/nfl-detroit-lions-team-logo-2.png",
    },
    {
        name: "Green Bay Packers",
        logo: "https://loodibee.com/wp-content/uploads/nfl-green-bay-packers-team-logo-2.png",
    },
    {
        name: "Los Angeles Rams",
        logo: "https://loodibee.com/wp-content/uploads/los-angeles-rams-2020-logo.png",
    },
    {
        name: "Minnesota Vikings",
        logo: "https://loodibee.com/wp-content/uploads/nfl-minnesota-vikings-team-logo-2.png",
    },
    {
        name: "New Orleans Saints",
        logo: "https://loodibee.com/wp-content/uploads/nfl-new-orleans-saints-team-logo-2.png",
    },
    {
        name: "Philadelphia Eagles",
        logo: "https://loodibee.com/wp-content/uploads/nfl-philadelphia-eagles-team-logo-2.png",
    },
    {
        name: "San Francisco 49ers",
        logo: "https://loodibee.com/wp-content/uploads/nba-charlotte-hornets-logo.png",
    },
    {
        name: "Seattle Seahawks",
        logo: "https://loodibee.com/wp-content/uploads/nfl-san-francisco-49ers-team-logo-2.png",
    },
    {
        name: "Tampa Bay Buccaneers",
        logo: "https://loodibee.com/wp-content/uploads/tampa-bay-buccaneers-2020-logo.png",
    },
    {
        name: "Washington Commanders",
        logo: "https://loodibee.com/wp-content/uploads/washington-commanders-logo.png",
    },
    {
        name: "Baltimore Ravens",
        logo: "https://loodibee.com/wp-content/uploads/nfl-baltimore-ravens-team-logo-2.png",
    },
    {
        name: "Buffalo Bills",
        logo: "https://loodibee.com/wp-content/uploads/nfl-buffalo-bills-team-logo-2.png",
    },
    {
        name: "Cincinnati Bengals",
        logo: "https://loodibee.com/wp-content/uploads/nfl-cincinnati-bengals-team-logo.png",
    },
    {
        name: "Cleveland Browns",
        logo: "https://loodibee.com/wp-content/uploads/nfl-cleveland-browns-team-logo-2.png",
    },
    {
        name: "Denver Broncos",
        logo: "https://loodibee.com/wp-content/uploads/nfl-denver-broncos-team-logo-2.png",
    },
    {
        name: "Houston Texans",
        logo: "https://loodibee.com/wp-content/uploads/nfl-houston-texans-team-logo-2.png",
    },
    {
        name: "Indianapolis Colts",
        logo: "https://loodibee.com/wp-content/uploads/nfl-indianapolis-colts-team-logo-2.png",
    },
    {
        name: "Jacksonville Jaguars",
        logo: "https://loodibee.com/wp-content/uploads/nfl-jacksonville-jaguars-team-logo-2.png",
    },
    {
        name: "Kansas City Chiefs",
        logo: "https://loodibee.com/wp-content/uploads/nfl-kansas-city-chiefs-team-logo-2.png",
    },
    {
        name: "Las Vegas Raiders",
        logo: "https://loodibee.com/wp-content/uploads/nfl-oakland-raiders-team-logo.png",
    },
    {
        name: "Los Angeles Chargers",
        logo: "https://loodibee.com/wp-content/uploads/nfl-los-angeles-chargers-team-logo-2.png",
    },
    {
        name: "Miami Dolphins",
        logo: "https://loodibee.com/wp-content/uploads/nfl-miami-dolphins-team-logo-2.png",
    },
    {
        name: "New England Patriots",
        logo: "https://loodibee.com/wp-content/uploads/nfl-new-england-patriots-team-logo-2.png",
    },
    {
        name: "New York Jets",
        logo: "https://loodibee.com/wp-content/uploads/nfl-new-york-jets-team-logo.png",
    },
    {
        name: "Pittsburgh Steelers",
        logo: "https://loodibee.com/wp-content/uploads/nfl-pittsburgh-steelers-team-logo-2.png",
    },
    {
        name: "New York Giants",
        logo: "https://loodibee.com/wp-content/uploads/nfl-new-york-giants-team-logo-2.png",
    },
    {
        name: "Tennessee Titans",
        logo: "https://loodibee.com/wp-content/uploads/nfl-tennessee-titans-team-logo-2.png",
    }
]


function Nfl() {
    const [ sports, setSports ] = useState(null)
    
    const showSports = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2015809037mshf97dd2a34293d90p144073jsn9507263ce2f7',
                'X-RapidAPI-Host': 'odds.p.rapidapi.com'
            }
        };
        fetch(`https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores?daysFrom=3`, options)
            .then(response => response.json())
            .then(response => {
                setSports(response)                   
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
    <div className='sportslide2'>
    <h1 className='sportsmain' id='NFL'>NFL 2022 Games</h1>
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
                                    {sport.scores[0].score} - {sport.scores[1].score}
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
export default Nfl