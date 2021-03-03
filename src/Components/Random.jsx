import React from 'react';

const Random = ({ max }) => {
  let min = 1;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div>
      <h3>
        Random value between 1 and {max} = {random}
      </h3>
    </div>
  );
};

export default Random;
