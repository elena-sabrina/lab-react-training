import React from 'react';

class CreditCard extends React.Component {
  render() {
    const {
      type,
      number,
      expirationMonth,
      expirationYear,
      bank,
      owner,
      bgColor,
      color,
    } = this.props;

    let imageurl;
    if (type === 'Visa') {
      imageurl = '/img/visa.png';
    } else if (type === 'Master Card') {
      imageurl = '/img/master-card.svg';
    }

    const security = number.replace(/.(?=.{4})/g, ' · ');

    return (
      <div
        className="creditCardlist"
        style={{ backgroundColor: bgColor, color: color }}
      >
        <img className="credicard-image" src={imageurl} alt={type} />
        <h3>{security}</h3>
        <div>
          <p>
            Expires {expirationMonth}/{expirationYear}
          </p>
          <p>{owner}</p>
        </div>
        <p>{bank}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="creditCard">
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
    </div>
  );
}

export default App;
