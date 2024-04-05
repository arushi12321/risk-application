import React from "react";
import { useFilterContext } from "../Context/FilterContext";
const Search = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
  return (
    <div>
      <div className="filter-search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search By Keywords"
            style={{
              width: "400px",
              color: "grey",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
