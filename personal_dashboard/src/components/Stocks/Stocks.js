import { useState, useEffect } from 'react';
import './Stocks.css'

function Stocks() {
    const [ stocks, setStocks ] = useState(null)
    const showStocks = () => {
       fetch('https://api.polygon.io/v2/reference/news?apiKey=aLriDEvFgjQLT7f3abtivxH60WMzReFo')
            .then(response => response.json())
            .then(response => setStocks(response))
            // .then(response => console.log(response))
            .catch(err => console.error(err));
        }
    useEffect(() => {
        showStocks()
    }, [])
    if(!stocks){
        return(
            <p>Loading....</p>
        )
    }
    return (
        <div>
            <h3>Top Stock News</h3>
            <ul>
                <li><a href={stocks.results[0].article_url}>{stocks.results[0].title}</a></li><br/>
                <li><a href={stocks.results[1].article_url}>{stocks.results[1].title}</a></li><br/>
                <li><a href={stocks.results[2].article_url}>{stocks.results[2].title}</a></li><br/>
                <li><a href={stocks.results[3].article_url}>{stocks.results[3].title}</a></li><br/>
                <li><a href={stocks.results[4].article_url}>{stocks.results[4].title}</a></li><br/>
            </ul>
        </div>
    )
}

export default Stocks