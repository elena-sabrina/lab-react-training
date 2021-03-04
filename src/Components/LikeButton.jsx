import React from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      colors: [
        'rgb(178,34,34)',
        'rgb(0,191,255)',
        'rgb(255,255,0)',
        'rgb(173,255,47)',
      ],
      index: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  changeColorindex = () => {
    this.setState({ index: this.state.index + 1 });
  };

  render() {
    return (
      <div>
        <button
          style={{ backgroundColor: `rgb(178,34,34)` }}
          onClick={this.incrementCount}
        >
          {this.state.count} Likes{' '}
        </button>

        <button onClick={this.changeColorindex}>click</button>
        <p>{this.state.colors[0]}</p>
        <p>{this.state.index}</p>
      </div>
    );
  }
}

export default LikeButton;
