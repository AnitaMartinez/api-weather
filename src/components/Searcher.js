import React from "react";
import PropTypes from "prop-types";

const Searcher = ({ onClick, onChange, valueInput }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Inserta el nombre de una ciudad"
        value={valueInput}
        onChange={onChange}
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
