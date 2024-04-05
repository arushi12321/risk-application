import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import { FaFilter } from "react-icons/fa";
import "../Css-Files/FilterSection.css";

const FilterSection = () => {
  const {
    filters: { Tag_Key },
    updateFilterValue,
  } = useFilterContext();

  return (
    <div>
      <div className="filter-container">
        <FaFilter className="filter-icon" />
        <select
          name="Tag_Key"
          id="filter"
          value={Tag_Key}
          onChange={updateFilterValue}
          className="filter-select"
        >
          <option value="" disabled hidden>
            FILTER
          </option>
          <option value="ALL">ALL</option>
          <option value="Industry">Industry</option>
          <option value="Domain">Domain</option>
          <option value="Client">Client</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
