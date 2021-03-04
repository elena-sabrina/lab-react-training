import React from 'react';

class DriverCard extends React.Component {
  render() {
    const { name, rating, img, car } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <img className="credicard-image" src={img} alt={name} />
        <p>
          {car.model} - {car.licensePlate}
        </p>
        <p>
          {'★'.repeat(Math.round(rating))}
          {'☆'.repeat(5 - Math.round(rating))}
        </p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="creditCard">
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
    </div>
  );
}

export default App;
