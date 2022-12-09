import React from 'react'
import { useState, useEffect } from 'react';
import "./Sports.css"

const logos = [
    {
        name: "Boston Celtics",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/800px-Boston_Celtics.svg.png"
    },
    {
        name: "Brooklyn Nets",
        logo: "https://b.fssta.com/uploads/application/nba/team-logos/Nets.vresize.350.350.medium.0.png",
    },
    {
        name: "New York Knicks",
        logo: "https://loodibee.com/wp-content/uploads/nba-new-york-knicks-logo.png",
    },
    {
        name: "Philadelphia 76ers",
        logo: "https://loodibee.com/wp-content/uploads/nba-philadelphia-76ers-logo.png",
    },
    {
        name: "Toronto Raptors",
        logo: "https://loodibee.com/wp-content/uploads/nba-toronto-raptors-logo-2020.png",
    },
    {
        name: "Chicago Bulls",
        logo: "https://loodibee.com/wp-content/uploads/nba-chicago-bulls-logo.png",
    },
    {
        name: "Cleveland Cavaliers",
        logo: "https://loodibee.com/wp-content/uploads/Clevelan-Cavaliers-logo-2022.png",
    },
    {
        name: "Detroit Pistons",
        logo: "https://loodibee.com/wp-content/uploads/nba-detroit-pistons-logo.png",
    },
    {
        name: "Indiana Pacers",
        logo: "https://loodibee.com/wp-content/uploads/nba-indiana-pacers-logo.png",
    },
    {
        name: "Milwaukee Bucks",
        logo: "https://loodibee.com/wp-content/uploads/nba-milwaukee-bucks-logo.png",
    },
    {
        name: "Atlanta Hawks",
        logo: "https://loodibee.com/wp-content/uploads/nba-atlanta-hawks-logo.png",
    },
    {
        name: "Charlotte Hornets",
        logo: "https://loodibee.com/wp-content/uploads/nba-charlotte-hornets-logo.png",
    },
    {
        name: "Miami Heat",
        logo: "https://loodibee.com/wp-content/uploads/nba-miami-heat-logo.png",
    },
    {
        name: "Orlando Magic",
        logo: "https://loodibee.com/wp-content/uploads/nba-orlando-magic-logo.png",
    },
    {
        name: "Washington Wizards",
        logo: "https://loodibee.com/wp-content/uploads/nba-washington-wizards-logo.png",
    },
    {
        name: "Denver Nuggets",
        logo: "https://loodibee.com/wp-content/uploads/nba-denver-nuggets-logo-2018.png",
    },
    {
        name: "Minnesota Timberwolves",
        logo: "https://loodibee.com/wp-content/uploads/nba-minnesota-timberwolves-logo.png",
    },
    {
        name: "Oklahoma City Thunder",
        logo: "https://loodibee.com/wp-content/uploads/nba-oklahoma-city-thunder-logo.png",
    },
    {
        name: "Portland Trail Blazers",
        logo: "https://loodibee.com/wp-content/uploads/nba-portland-trail-blazers-logo.png",
    },
    {
        name: "Utah Jazz",
        logo: "https://loodibee.com/wp-content/uploads/utah-jazz-logo-wordmark-2022.png",
    },
    {
        name: "Golden State Warriors",
        logo: "https://loodibee.com/wp-content/uploads/nba-golden-state-warriors-logo-2020.png",
    },
    {
        name: "Los Angeles Clippers",
        logo: "https://loodibee.com/wp-content/uploads/nba-la-clippers-logo.png",
    },
    {
        name: "Los Angeles Lakers",
        logo: "https://loodibee.com/wp-content/uploads/nba-los-angeles-lakers-logo.png",
    },
    {
        name: "Phoenix Suns",
        logo: "https://loodibee.com/wp-content/uploads/nba-phoenix-suns-logo.png",
    },
    {
        name: "Sacramento Kings",
        logo: "https://loodibee.com/wp-content/uploads/nba-sacramento-kings-logo.png",
    },
    {
        name: "Dallas Mavericks",
        logo: "https://loodibee.com/wp-content/uploads/nba-dallas-mavericks-logo.png",
    },
    {
        name: "Houston Rockets",
        logo: "https://loodibee.com/wp-content/uploads/nba-houston-rockets-logo-2020.png",
    },
    {
        name: "Memphis Grizzlies",
        logo: "https://loodibee.com/wp-content/uploads/nba-memphis-grizzlies-logo.png",
    },
    {
        name: "New Orleans Pelicans",
        logo: "https://loodibee.com/wp-content/uploads/nba-new-orleans-pelicans-logo.png",
    },
    {
        name: "San Antonio Spurs",
        logo: "https://loodibee.com/wp-content/uploads/nba-san-antonio-spurs-logo.png",
    }
]

function Sports() {
    const [ sports, setSports ] = useState(null)
    
    const showSports = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2015809037mshf97dd2a34293d90p144073jsn9507263ce2f7',
                'X-RapidAPI-Host': 'odds.p.rapidapi.com'
            }
        };
        fetch(`https://odds.p.rapidapi.com/v4/sports/basketball_nba/scores?daysFrom=3`, options)
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
    <div className='sportslide'>
    <h1 className='sportsmain' id='NBA'>NBA 2022 Games</h1>
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
export default Sports