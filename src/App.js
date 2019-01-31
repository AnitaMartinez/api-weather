import React, { Component } from "react";
import Searcher from "./components/Searcher";
import Cards from "./components/Cards";
import Filters from "./components/Filters";
import { Api } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherCities: [],
      valueSerchInput: "",
      valueWeatherSelector: "",
      tempMinInput: "",
      tempMaxInput: ""
    };
    this.getInfoWeather = this.getInfoWeather.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
  }

  getInfoWeather() {
    const listCities = [];
    const temperatureCities = [];
    Api.getCitiesByName(this.state.valueSerchInput).then(cities => {
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
              weatherCities: listCities
            });
            console.log(temperatureCities);
          })
          .catch(err => console.log(err));
      }
    });
  }

  handleInputs = (value, type) => {
    switch (type) {
      case "searcher":
        this.setState({ valueSerchInput: value });
        break;
      case "weather":
        this.setState({ valueWeatherSelector: value });
        break;
      case "minTemp":
        this.setState({ tempMinInput: value });
        break;
      case "maxTemp":
        this.setState({ tempMaxInput: value });
        break;
      default:
        break;
    }
  };

  render() {
    const {
      weatherCities,
      valueSerchInput,
      valueWeatherSelector,
      tempMinInput,
      tempMaxInput
    } = this.state;
    return (
      <div>
        <header className="header">
          <h1>El tiempo de tu ciudad</h1>
        </header>
        <Searcher
          onClick={this.getInfoWeather}
          valueInput={valueSerchInput}
          onChange={this.handleInputs}
          type={"searcher"}
        />
        <Filters
          onChangeSelector={this.handleInputs}
          valueWeatherSelector={valueWeatherSelector}
          onChangeMinTemInput={this.handleInputs}
          tempMinInput={tempMinInput}
          typeWeather={"weather"}
          typeMinTemp={"minTemp"}
          typeMaxTemp={"maxTemp"}
        />
        <Cards
          cities={weatherCities}
          stateWeatherFilter={valueWeatherSelector}
          minTempFilter={tempMinInput}
          maxTempFilter={tempMaxInput}
        />
      </div>
    );
  }
}

export default App;
