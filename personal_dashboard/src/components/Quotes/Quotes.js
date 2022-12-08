import { useState, useEffect } from 'react';
import './Quotes.css'

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
            <div className='quotesbox'>
                <p>{quotes.quote.body}</p>
            </div>
            <div className='btn'>
                <button onClick={showQuotes}>Next Quote</button>
            </div>
        </div>
    )
}
export default Quotes
