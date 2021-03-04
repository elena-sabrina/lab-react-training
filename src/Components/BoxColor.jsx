import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const colortotal = r + g + b;
  const brightnes = colortotal / 3;
  const textcolor = brightnes > 255 / 2 ? 'black' : 'white';
  return (
    <div
      style={{ backgroundColor: `rgb(   ${r},${g},${b}   )`, color: textcolor }}
    >
      <p>
        rgb ({r}, {g}, {b})
      </p>
    </div>
  );
};

function App() {
  return (
    <div>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
