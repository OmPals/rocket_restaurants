import { useState } from "react";

const Search = ({ setIsFilterOn, isFilterOn }) => {
  const filterBtnOnClick = () => {
    setIsFilterOn(!isFilterOn);
  };

  return (
    <div className="search-container">
      {/* <input type="text" className="text-input"></input> */}
      <button className="filter-btn" onClick={filterBtnOnClick}>
        🏆 filter top restaurants 🏆
      </button>
      <div>
        <span className="search-icon">🔍</span>
      </div>
    </div>
  );
};

export default Search;
