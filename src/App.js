import React, { Component } from "react";
import { create } from "apisauce";
import SearchEngine from "./components/SearchEngine";
import Cards from "./components/Cards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoWeather: []
    };
    this.fetchInfoWeather = this.fetchInfoWeather.bind(this);
  }

  fetchInfoWeather() {
    const ENDPOINT =
      "https://www.metaweather.com/api/location/search/?query=ma";
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(d => console.log(d))
      .then(data => {
        this.setState({
          infoCharacters: data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>El tiempo de tu ciudad</h1>
        <SearchEngine onClick={this.fetchInfoWeather} />
        <Cards />
      </div>
    );
  }
}

export default App;
