import React from "react";
import PropTypes from "prop-types";

const SearchEngine = ({ onClick }) => {
  return (
    <div>
      <input
        type="text"
        value=""
        placeholder="Inserta el nombre de una ciudad"
      />
      <button onClick={onClick}> Buscar </button>
    </div>
  );
};

export default SearchEngine;
