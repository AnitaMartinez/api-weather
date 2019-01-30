import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  render() {
    const { cities } = this.props;
    return (
      <ul>
        {cities.map((city, index) => {
          return <Card infoCity={city} key={index} />;
        })}
      </ul>
    );
  }
}

export default Cards;
