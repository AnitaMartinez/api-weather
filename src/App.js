import React, { Component } from "react";
import Searcher from "./components/Searcher";
import Cards from "./components/Cards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherCities: [],
      valueInput: ""
    };
    this.fetchInfoWeather = this.fetchInfoWeather.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  fetchInfoWeather() {
    const URL = "https://www.metaweather.com/api/location";
    let listCities = [];
    fetch(`${URL}/search/?query=${this.state.valueInput}`)
      .then(response => response.json())
      .then(cities => {
        for (const city of cities) {
          fetch(URL + "/" + city.woeid)
            .then(response => response.json())
            .then(weather => {
              let mostUpdatedInfoCity = weather.consolidated_weather.slice(
                -1
              )[0];
              listCities.push({
                nameCity: weather.title,
                weatherState: mostUpdatedInfoCity.weather_state_name,
                temperature: mostUpdatedInfoCity.the_temp,
                icon: mostUpdatedInfoCity.weather_state_abbr
              });
              this.setState({
                weatherCities: listCities
              });
            });
        }
      })
      .catch(err => console.log(err));
  }

  handleInput = event => {
    this.setState({ valueInput: event.target.value });
  };

  render() {
    const { weatherCities, valueInput } = this.state;
    return (
      <div>
        <h1>El tiempo de tu ciudad</h1>
        <Searcher
          onClick={this.fetchInfoWeather}
          valueInput={valueInput}
          onChange={this.handleInput}
        />
        <Cards cities={weatherCities} />
      </div>
    );
  }
}

export default App;
