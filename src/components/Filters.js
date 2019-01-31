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
  typeMinTemp,
  typeMaxTemp
}) => {
  const handleChangeSelector = (event, type) => {
    onChangeSelector(event.target.value, typeWeather);
  };
  const handleChangeMinTempInput = (event, type) => {
    onChangeMinTemInput(event.target.value, typeMinTemp);
  };
  const handleChangeMaxTempInput = (event, type) => {
    onChangeMinTemInput(event.target.value, typeMaxTemp);
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
      <p>Mostrar ciudades que tengan una temperatura mayor de:</p>
      <input
        type="number"
        value={valueTempMinInput}
        onChange={handleChangeMinTempInput}
        placeholder="centígrados"
      />
      <p>Mostrar ciudades que tengan una temperatura menor de:</p>
      <input
        type="number"
        value={valueTempMaxInput}
        onChange={handleChangeMaxTempInput}
        placeholder="centígrados"
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
