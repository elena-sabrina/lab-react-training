import React from 'react';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import Rating from './Components/Rating';
import DriverCard from './Components/DriverCard';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <IdCard />
      <Greetings />
      <Random />
      <BoxColor />
      <CreditCard />
      <Rating />
      <DriverCard />
    </div>
  );
}

export default App;
