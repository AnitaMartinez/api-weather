import React from "react";
import PropTypes from "prop-types";
import { weatherStatesEnum } from "../utils";

const Filters = ({
  onChange,
  valueWeatherSelector,
  typeWeather,
  typeMinTemp,
  typeMaxTemp
}) => {
  const handleChangeSelector = (event, type) => {
    onChange(event.target.value, typeWeather);
  };
  const handleChangeMinTempInput = (event, type) => {
    onChange(event.target.value, typeMinTemp);
  };
  const handleChangeMaxTempInput = (event, type) => {
    onChange(event.target.value, typeMaxTemp);
  };
  return (
    <div className="container-filters">
      <h3 className="txt-sm">Puedes filtar por tiempo:</h3>
      <select onChange={handleChangeSelector} value={valueWeatherSelector}>
        <option value="" defaultValue>
          Elige un estado
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
      <h4 className="txt-sm">Puedes filtrar por temperaturas:</h4>
      <div className="container-input-filter">
        <p className="txt-sm">
          Mostrar ciudades que tengan una temperatura mayor de:
        </p>
        <input
          type="number"
          onChange={handleChangeMinTempInput}
          placeholder="°C"
          className="input-filter"
        />
      </div>
      <div className="container-input-filter">
        <p className="txt-sm">
          Mostrar ciudades que tengan una temperatura menor de:
        </p>
        <input
          type="number"
          onChange={handleChangeMaxTempInput}
          placeholder="°C"
          className="input-filter"
        />
      </div>
    </div>
  );
};

Filters.propTypes = {
  onChange: PropTypes.func,
  valueWeatherSelector: PropTypes.string,
  typeWeather: PropTypes.string,
  typeMinTemp: PropTypes.string,
  typeMaxTemp: PropTypes.string
};

export default Filters;
