import React from "react";
import PropTypes from "prop-types";
import { weatherStatesEnum } from "../utils";

const Selectors = ({ onChange, valueSelector }) => {
  return (
    <select onChange={onChange} value={valueSelector}>
      <option value="" defaultValue>
        Filtra por tiempo
      </option>
      <option value={weatherStatesEnum.snow}>Nieve</option>
      <option value={weatherStatesEnum.sleet}>Aguanieve</option>
      <option value={weatherStatesEnum.hail}>Granizo</option>
      <option value={weatherStatesEnum.thunderstorm}>Tormenta</option>
      <option value={weatherStatesEnum.heavyRain}>Lluvia espesa</option>
      <option value={weatherStatesEnum.lightRain}>Lluvia ligera</option>
      <option value={weatherStatesEnum.showers}>Llovizna</option>
      <option value={weatherStatesEnum.heavyCloud}>Muy nuboso</option>
      <option value={weatherStatesEnum.lighCloud}>Poco nuboso</option>
      <option value={weatherStatesEnum.clear}>Soleado</option>
    </select>
  );
};

Selectors.propTypes = {
  onChange: PropTypes.func,
  valueSelector: PropTypes.string
};

export default Selectors;
