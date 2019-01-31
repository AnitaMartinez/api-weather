import React, { Component } from "react";
import Searcher from "./components/Searcher";
import Cards from "./components/Cards";
import { sumAndAverage } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherCities: [],
      valueInput: "",
      averageTemperature: ""
    };
    this.fetchInfoWeather = this.fetchInfoWeather.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  fetchInfoWeather() {
    const URL = "https://www.metaweather.com/api/location";
    const listCities = [];
    const temperatureCities = [];

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
              temperatureCities.push(mostUpdatedInfoCity.the_temp);
              this.setState({
                weatherCities: listCities,
                averageTemperature:
                  temperatureCities.length && sumAndAverage(temperatureCities)
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
    const { weatherCities, valueInput, averageTemperature } = this.state;

    return (
      <div>
        <h1>El tiempo de tu ciudad</h1>
        <Searcher
          onClick={this.fetchInfoWeather}
          valueInput={valueInput}
          onChange={this.handleInput}
        />
        <h2>Temperatura media: </h2>
        <p>{averageTemperature} centígrados</p>
        <Cards cities={weatherCities} />
      </div>
    );
  }
}

export default App;
