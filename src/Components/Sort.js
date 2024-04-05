import React from "react";
import { useFilterContext } from "../Context/FilterContext";

const Sort = () => {
  const { sorting } = useFilterContext();
  return (
    <div style={{ marginLeft: "500px" }}>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}
            style={{
              width: "400px",
              color: "grey",
              fontSize: "20px",
              fontWeight: "bold",
              height: "45px",
              borderRadius: "5px",
            }}
          >
            <option value="ID_Ascending">Risk ID (Ascending)</option>
            <option value="#" disabled></option>
            <option value="ID_Descending">Risk ID (Descending)</option>
            <option value="#" disabled></option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
