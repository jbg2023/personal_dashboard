import './App.css';



import Loaction from './components/Weather/Loaction';
import Quotes from './components/Quotes/Quotes';
import Stocks from './components/Stocks/Stocks';
import Weather from './components/Weather/Weather';
import Sports from './components/Sports/Sports';
import Nfl from './components/Sports/Nfl';
import Calender from './components/Calender/Calender';

function App() {

  return (
    <>
    <div style={{
        backgroundImage: `url("https://source.unsplash.com/random/?nature")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        }}>
    <main>
      <div className='innerbox'>
        <div className='subbox'>
          <Calender/>
        </div>
        <div className='subbox'>
            <Quotes/>
        </div>
      </div>
      <div className='innerbox'>
        <div className='subboxsingle'>
          <h1>Stock News</h1>
            <Stocks />
        </div>
      </div>
      <div className='innerbox'>
        < div className='subboxsingle'>
          <div className='searchnav'>
            <Loaction />
          </div>
          </div>
        
      </div>
      <div className='innerbox'> 
        <div className='subboxsingle'>
          <div className='sportsnav'>
            <a href='#NBA'>NBA 2022 Games</a>
            <a href='#NFL'>NFL 2022 Games</a>
          </div>
          <div className='sportgenre'>
            <Sports/>
            <Nfl/>
          </div>
        </div>
      </div>
    </main>
    </div>
    </> 
    
  )

}
export default App;
