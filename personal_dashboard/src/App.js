import './App.css';
import Quotes from './components/Quotes/Quotes';
import Stocks from './components/Stocks/Stocks';

function App() {
  return (
    <>
    <div style={{
        backgroundImage: `url("https://source.unsplash.com/random/?light,wallpaper,background")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        }}>
        
    <nav>
      <div className='navigation'>
        <h1>Homepage</h1>
      </div>
    </nav>
    <main>
      <div className='innerbox'>
        <div className='subbox'>
          <h1>Weather</h1>
        </div>
        <div className='subbox'>
          <h1>Quotes</h1>
            <Quotes/>
        </div>
      </div>
      <div className='innerbox'>
        <div className='subboxsingle'>
          <h1>Stocks</h1>
            <Stocks />
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
    </div>
    </> 
  )

}
export default App;
