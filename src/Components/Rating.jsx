import React from 'react';

function Rating({ children }) {
  return (
    <div>
      {'★'.repeat(Math.round(children))}
      {'☆'.repeat(5 - Math.round(children))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>
  );
}

export default App;

