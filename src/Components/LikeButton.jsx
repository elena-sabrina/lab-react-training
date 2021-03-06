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

  colorAndcount = () => {
    this.incrementCount();
    this.changeColorindex();
  };

  render() {
    return (
      <div>
        <button
          style={{
            backgroundColor: this.state.colors[
              this.state.index % this.state.colors.length
            ],
          }}
          onClick={this.colorAndcount}
        >
          {this.state.count} Likes{' '}
        </button>
      </div>
    );
  }
}

export default LikeButton;
