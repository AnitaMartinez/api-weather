import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  render() {
    const { cities, stateWeatherFilter, minTempFilter } = this.props;
    console.log("minTempFilter", minTempFilter);
    const filteredCities = cities.filter(city => {
      return stateWeatherFilter === ""
        ? city
        : city.abbr === stateWeatherFilter;
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
