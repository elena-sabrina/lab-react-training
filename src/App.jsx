import React from 'react';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import Rating from './Components/Rating';
import DriverCard from './Components/DriverCard';
import LikeButton from './Components/LikeButton';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="all-app">
      <IdCard />
      <Greetings />
      <Random />
      <BoxColor />
      <CreditCard />
      <Rating />
      <DriverCard />
      <LikeButton />
    </div>
  );
}

export default App;
