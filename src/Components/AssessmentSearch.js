import React from "react";
import { useFilterContext } from "../Context/FilterContext";
const AssessmentSearch = () => {
  const {
    filters: { assessment_text },
    updateFilterValueSearch,
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
            type="assessment_text"
            name="assessment_text"
            value={assessment_text}
            onChange={updateFilterValueSearch}
            placeholder="Search By Keywords"
            style={{
              width: "300px",
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

export default AssessmentSearch;
