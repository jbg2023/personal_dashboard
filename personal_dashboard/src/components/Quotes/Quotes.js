import { useState, useEffect } from 'react';
import './Quotes.css'
import Button from 'react-bootstrap/Button';

function Quotes() {

    const [ quotes, setQuotes ] = useState(null)

    const showQuotes = () => {
        const url = "https://favqs.com/api/qotd";
        

        fetch(url)
        .then(response => response.json())
        .then(response => {
            setQuotes(response)
        })
        .catch(console.error)
    }

    useEffect(() => {
        showQuotes()
    }, [])
    if(!quotes){
        return(
            <p>Loading....</p>
        )
    }
    return (
        <div>
            <h1 className='titlequote'>Quote</h1>
            <div className='quotesbox fluid'>
                <p>"{quotes.quote.body}"</p>
                <p>-{quotes.quote.author}</p>
            </div>
            <div className='btn'>
                <Button
                    variant="outline-light"
                    onClick={showQuotes}>Next Quote
                </Button>
            </div>
        </div>
    )
}
export default Quotes
