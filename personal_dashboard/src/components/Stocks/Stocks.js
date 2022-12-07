// require('dotenv').config()
import { useState, useEffect } from 'react';
import './Stocks.css';
import Accordion from 'react-bootstrap/Accordion';

function Stocks() {
    const dotenv = process.env.POLYGON_API_KEY
    const [ stocks, setStocks ] = useState(null)
    const showStocks = () => {
       fetch('https://api.polygon.io/v2/reference/news?apiKey=aLriDEvFgjQLT7f3abtivxH60WMzReFo')
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(response => setStocks(response))
            .catch(err => console.error(err));
        };
    useEffect(() => {
        showStocks()
    }, [])
    if(!stocks){
        return(
            <p>Loading....</p>
        )
    };
    return (
        <div >
            <Accordion flush="true" className="opacity-75 rounded">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{stocks.results[0].title}</Accordion.Header>
                    <Accordion.Body>
                        {stocks.results[0].description} <a href={stocks.results[0].article_url}>Read More...</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>{stocks.results[1].title}</Accordion.Header>
                    <Accordion.Body>
                        {stocks.results[1].description} <a href={stocks.results[1].article_url}>Read More...</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>{stocks.results[2].title}</Accordion.Header>
                    <Accordion.Body>
                        {stocks.results[2].description} <a href={stocks.results[2].article_url}>Read More...</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>{stocks.results[3].title}</Accordion.Header>
                    <Accordion.Body>
                        {stocks.results[3].description} <a href={stocks.results[3].article_url}>Read More...</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>{stocks.results[4].title}</Accordion.Header>
                    <Accordion.Body>
                        {stocks.results[4].description} <a href={stocks.results[4].article_url}>Read More...</a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
};

export default Stocks