import React, { Component } from "react";
import Searcher from "./components/Searcher";
import Cards from "./components/Cards";
import Selectors from "./components/Selectors";
import { sumAndAverage } from "./utils";
import { Api } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherCities: [],
      valueInput: "",
      valueWeatherSelector: "",
      averageTemperature: ""
    };
    this.getInfoWeather = this.getInfoWeather.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleWeatherSelector = this.handleWeatherSelector.bind(this);
  }

  getInfoWeather() {
    const listCities = [];
    const temperatureCities = [];
    Api.getCitiesByName(this.state.valueInput).then(cities => {
      for (const city of cities) {
        Api.getWeatherByCity(city.woeid)
          .then(weather => {
            let mostUpdatedInfoCity = weather.consolidated_weather.slice(-1)[0];
            listCities.push({
              nameCity: weather.title,
              weatherState: mostUpdatedInfoCity.weather_state_name,
              temperature: mostUpdatedInfoCity.the_temp,
              abbr: mostUpdatedInfoCity.weather_state_abbr
            });
            temperatureCities.push(mostUpdatedInfoCity.the_temp);
            this.setState({
              weatherCities: listCities,
              averageTemperature: sumAndAverage(temperatureCities)
            });
          })
          .catch(err => console.log(err));
      }
    });
  }

  handleInput = event => {
    this.setState({ valueInput: event.target.value });
  };

  handleWeatherSelector = event => {
    this.setState({
      valueWeatherSelector: event.target.value
    });
  };

  render() {
    const {
      weatherCities,
      valueInput,
      averageTemperature,
      valueWeatherSelector
    } = this.state;
    console.log(weatherCities);
    return (
      <div>
        <h1>El tiempo de tu ciudad</h1>
        <Searcher
          onClick={this.getInfoWeather}
          valueInput={valueInput}
          onChange={this.handleInput}
        />
        <Selectors
          onChange={this.handleWeatherSelector}
          valueSelector={valueWeatherSelector}
        />
        {averageTemperature.length > 0 && (
          <div>
            <h2>Temperatura media de las ciudades: </h2>
            <p>{averageTemperature} centígrados</p>
          </div>
        )}
        <Cards cities={weatherCities} stateWeather={valueWeatherSelector} />
      </div>
    );
  }
}

export default App;
