/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { gifId, changeSelectGif } = this.props;
    changeSelectGif(gifId);
  }

  render() {
    const { gifId } = this.props;
    const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <img src={url} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
