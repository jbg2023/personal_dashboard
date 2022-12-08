import './App.css';

import Quotes from './components/Quotes/Quotes';
import Forecast from './components/Weather/Forecast';
import Weather from './components/Weather/Weather';

function App() {
  return (
    
    <>
    <nav>
      <div className='navigation'>
        <h1>Homepage</h1>
      </div>
    </nav>
    <main>
      <div className='innerbox'>
        <div className='subbox'>
          <h1>Weather</h1>
          <Forecast />
          <Weather />
        </div>
        <div className='subbox'>
          <h1>Quotes</h1>
            <Quotes/>
        </div>
      </div>
      <div className='innerbox'>
        <div className='subboxsingle'>
          <h1>Stocks</h1>
        </div>
      </div>
      <div className='innerbox'>
        <div className='subboxsingle'>
          <h1>Calender</h1>
        </div>
      </div>
      <div className='innerbox'>
        <div className='subboxsingle'>
          <h1>Sports</h1>
        </div>
      </div>
    </main>
    </> 
    
  )

}
export default App;
