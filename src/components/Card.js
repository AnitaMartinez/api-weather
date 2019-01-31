import React from "react";
import PropTypes from "prop-types";

const Card = ({ infoCity }) => {
  const { nameCity, weatherState, temperature, abbr } = infoCity;
  return (
    <li>
      <h4>{nameCity}</h4>
      <p>{weatherState}</p>
      <img
        src={`https://www.metaweather.com/static/img/weather/${abbr}.svg`}
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
