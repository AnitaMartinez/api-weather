import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  render() {
    const { cities, stateWeather } = this.props;
    console.log("stateWeather", typeof stateWeather);
    const filteredCities = cities.filter(city => {
      return stateWeather === "" ? city : city.abbr === stateWeather;
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
