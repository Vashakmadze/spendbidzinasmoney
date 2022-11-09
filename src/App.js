import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState, useEffect } from 'react';
import data from "./assets/data.json";
import Footer from "./components/Footer/Footer";


function App() {

  useEffect(() => {
    document.title = "Spend Bidzo's Money";
  });

  const [netWorth, setNetWorth] = useState(4800000000);

  const [cartLength, setCartLength] = useState(0);

  const [cart, setCart] = useState([]);
  console.log(cart);

  const cartManagement = {
    cart: cart,
    setCart: setCart,
    cartLength: cartLength,
    setCartLength: setCartLength,
    netWorth: netWorth,
    setNetWorth : setNetWorth
  }

  return (
    <div className="App">
      <Header netWorth={netWorth}/>
      <Main data={data} cartManagement={cartManagement}/>
      <Footer cartManagement={cartManagement}/>
    </div>
  );
}

export default App;
