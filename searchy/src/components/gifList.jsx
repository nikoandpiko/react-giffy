import React, { Component } from 'react';

import Gif from "./gif";

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  render() {
    const { gifIds, changeSelectGif } = this.props;
    return (
      <div className="gif-list">
        {gifIds.map((gifId) => <Gif gifId={gifId} key={gifId} changeSelectGif={changeSelectGif} />)}
      </div>
    );
  }
}

export default GifList;
