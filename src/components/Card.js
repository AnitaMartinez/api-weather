import React from "react";
import PropTypes from "prop-types";

const Card = ({ nameCity, weatherState, icon, temperature }) => {
  return (
    <li>
      <h3>{nameCity}</h3>
      <p>{weatherState}</p>
      <img src={icon} alt={weatherState} />
      <p>{temperature}</p>
    </li>
  );
};

Card.propTypes = {
  nameCity: PropTypes.string,
  weatherState: PropTypes.string,
  icon: PropTypes.string,
  temperature: PropTypes.string
};

export default Card;
