import React, { Component } from "react";
import Card from "./Card";
import { sumAndAverage } from "../utils";

class Cards extends Component {
  render() {
    const {
      cities,
      stateWeatherFilter,
      minTempFilter,
      maxTempFilter
    } = this.props;
    const filteredCities = cities
      .filter(city => {
        return stateWeatherFilter === ""
          ? city
          : city.abbr === stateWeatherFilter;
      })
      .filter(city => {
        return minTempFilter === ""
          ? city
          : city.temperature > Number(minTempFilter);
      })
      .filter(city => {
        return maxTempFilter === ""
          ? city
          : city.temperature < Number(maxTempFilter);
      });

    let temperatures = [];
    for (const city of filteredCities) {
      temperatures.push(city.temperature);
    }
    const averageTemperature =
      temperatures.length > 0 ? sumAndAverage(temperatures) : [];

    return (
      <div>
        {averageTemperature.length > 0 && (
          <div>
            <h2>Temperatura media de las ciudades: </h2>
            <p>{averageTemperature} centígrados</p>
          </div>
        )}
        <ul>
          {filteredCities.map((city, index) => {
            return <Card infoCity={city} key={index} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Cards;
