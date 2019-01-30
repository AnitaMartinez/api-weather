import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  render() {
    return (
      <ul>
        <Card nameCity="Nombre de la ciudad" />
      </ul>
    );
  }
}

export default Cards;
