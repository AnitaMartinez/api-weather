import React from "react";
import PropTypes from "prop-types";

const Searcher = ({ onClick, onChange, valueInput, type }) => {
  const handleChangeInput = event => {
    onChange(event.target.value, type);
  };
  return (
    <div className="container-searcher">
      <input
        type="text"
        placeholder="Inserta el nombre de una ciudad"
        value={valueInput}
        onChange={handleChangeInput}
        className="input-search"
      />
      <button className="btn-search" onClick={onClick}>
        Buscar
      </button>
    </div>
  );
};

Searcher.propTypes = {
  onClick: PropTypes.func,
  valueInput: PropTypes.string
};

export default Searcher;
