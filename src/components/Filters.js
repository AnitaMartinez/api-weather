import React from "react";
import PropTypes from "prop-types";
import { weatherStatesEnum } from "../utils";

const Filters = ({
  onChangeSelector,
  onChangeMinTemInput,
  valueWeatherSelector,
  valueTempMinInput,
  valueTempMaxInput,
  typeWeather,
  typeMinTemp
}) => {
  const handleChangeSelector = (event, type) => {
    onChangeSelector(event.target.value, typeWeather);
  };
  const handleChangeMinTempInput = (event, type) => {
    onChangeMinTemInput(event.target.value, typeMinTemp);
  };
  return (
    <div>
      <select onChange={handleChangeSelector} value={valueWeatherSelector}>
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

      <h3>Filtra por temperatura:</h3>
      <p>Filtrar por temperatura mínima:</p>
      <input
        type="number"
        value={valueTempMinInput}
        onChange={handleChangeMinTempInput}
      />
    </div>
  );
};

Filters.propTypes = {
  onChangeSelector: PropTypes.func,
  valueWeatherSelector: PropTypes.string,
  valueTempMinInput: PropTypes.string
};

export default Filters;
