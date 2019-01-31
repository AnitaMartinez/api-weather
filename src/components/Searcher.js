import React from "react";
import PropTypes from "prop-types";

const Searcher = ({ onClick, onChange, valueInput, type }) => {
  const handleChangeInput = event => {
    onChange(event.target.value, type);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Inserta el nombre de una ciudad"
        value={valueInput}
        onChange={handleChangeInput}
      />
      <button onClick={onClick}> Buscar </button>
    </div>
  );
};

Searcher.propTypes = {
  onClick: PropTypes.func,
  valueInput: PropTypes.string
};

export default Searcher;
