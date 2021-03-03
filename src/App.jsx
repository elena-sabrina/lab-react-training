import React from 'react';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <IdCard />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
