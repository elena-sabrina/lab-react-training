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

export default BoxColor;
