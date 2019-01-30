import React from "react";
import PropTypes from "prop-types";

const Card = ({ infoCity }) => {
  const { nameCity, weatherState, temperature, icon } = infoCity;
  return (
    <li>
      <h3>{nameCity}</h3>
      <p>{weatherState}</p>
      <img
        src={`https://www.metaweather.com/static/img/weather/${icon}.svg`}
        alt={weatherState}
      />
      <p>{temperature}</p>
    </li>
  );
};

Card.defaultProps = {
  infoCity: {}
};

Card.propTypes = {
  infoCity: PropTypes.obj
};

export default Card;
