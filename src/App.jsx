import React from 'react';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <IdCard />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;
