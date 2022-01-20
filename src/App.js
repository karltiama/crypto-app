import './App.css';
import { useEffect, useState } from 'react'     // add useState
import  Axios from 'axios';
import Coin from './components/Coin'      

function App() {
  const [listOfCoins, setListofCoins] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then(
      (response) => {
          // console.log(response.data);
          setListofCoins(response.data.coins);
        }
      );
  }, []);


  return (
    <div className="App">
      <div className="cryptoHeader"></div>
      <div className="cryptopDisplay">
        {listOfCoins.map((coin) => {
          return <Coin 
              name={coin.name} 
              icon={coin.icon} 
              price={coin.price} 
              symbol={coin.symbol} 
            />
        })}
      </div>
    </div>
  );
}

export default App;

