import React, { Component } from 'react';

import Gif from "./gif";
import GifList from "./gifList";
import SearchBar from "./searchBar";

const giphy = require('giphy-api')({
  apiKey: 'TKvn8kBlWCsCKZMqgH6Del1FW2dvJ0Z6',
  https: true
});

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifId: "WuGSL4LFUMQU",
      gifIds: ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq",
        "gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI",
        "zOvBKUUEERdNm", "PnpkimJ5mrZRe", "LmNwrBhejkK9EFP504",
        "5ntdy5Ban1dIY", "ZG719ozZxGuThHBckn", "TilmLMmWrRYYHjLfub", "kHrKpJiCbOmkWD4xT9"]
    };
  }

  changeSelectGif = (newGifId) => {
    this.setState({
      gifId: newGifId
    });
  }

  changeGifList = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifIds: res.data.map((gif) => gif.id)
      });
    });
  }

  render() {
    const { gifId, gifIds } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar changeGifList={this.changeGifList} />
          <div className="selected-gif">
            <Gif gifId={gifId} />
          </div>
          {/* <a href="https://www.nikoandpiko.me">nikoandpiko.me</a> */}
        </div>
        <div className="right-scene">
          <GifList gifIds={gifIds} changeSelectGif={this.changeSelectGif} />
        </div>
      </div>
    );
  }
}

export default App;
