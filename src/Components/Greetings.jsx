import React from 'react';

const Greetings = ({ lang, children }) => {
  let greeting;
  if (lang === 'de') {
    greeting = 'Hallo';
  } else if (lang === 'fr') {
    greeting = 'Bonjour';
  } else if (lang === 'es') {
    greeting = 'Ola';
  } else if (lang === 'en') {
    greeting = 'Hello';
  } else {
    greeting = 'Hello';
  }
  return (
    <div>
      <h3>
        {greeting} {children}
      </h3>
    </div>
  );
};

export default Greetings;
