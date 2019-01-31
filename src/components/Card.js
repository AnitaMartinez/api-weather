import React from "react";
import PropTypes from "prop-types";

const Card = ({ infoCity }) => {
  const { nameCity, weatherState, temperature, abbr } = infoCity;
  return (
    <li className="card">
      <h5 className="title-card">{nameCity}</h5>
      <div className="container-infoCard">
        <img
          src={`https://www.metaweather.com/static/img/weather/${abbr}.svg`}
          alt={weatherState}
          className="icon-weather"
        />
        <div>
          <p>{weatherState}</p>
          <p>{temperature}</p>
        </div>
      </div>
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
