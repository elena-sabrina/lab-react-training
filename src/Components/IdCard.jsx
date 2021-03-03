import React from 'react';

class IdCard extends React.Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    return (
      <div>
        <li>
          <img src={picture} alt="p" />
          <div>
            <h3>
              {firstName} {lastName}
            </h3>
            <p>{gender}</p>
            <p>{height}</p>
          </div>
        </li>
      </div>
    );
  }
}

function App() {
  return (
    <div className="idCardlist">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height="178"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height="172"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
