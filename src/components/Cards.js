import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  render() {
    const {
      cities,
      stateWeatherFilter,
      minTempFilter,
      maxTempFilter
    } = this.props;
    console.log("stateWeatherFilter", stateWeatherFilter);
    console.log("minTempFilter", minTempFilter);

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

    return (
      <ul>
        {filteredCities.map((city, index) => {
          return <Card infoCity={city} key={index} />;
        })}
      </ul>
    );
  }
}

export default Cards;
