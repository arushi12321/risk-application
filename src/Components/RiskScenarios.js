import React from "react";
import Nav from "./Nav";
import Sort from "./Sort";
import Scenes from "./Scenes";
import FilterSection from "./FilterSection";
import Search from "./Search";
import "../Css-Files/RiskScenarios.css";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CreateRiskForm from "./CreateRiskForm";
import { useState } from "react";
const RiskScenarios = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="risk-scenarios-page">
      <Nav />
      <div className="options-container">
        <div className="options-row1">
          <NavLink to="/library" style={{ marginRight: "15px" }}>
            <FaArrowLeft style={{ fontSize: "30px" }} />
          </NavLink>
          <span style={{ fontSize: "30px", marginRight: "10px" }}>
            Library/
          </span>
          <NavLink
            to="/library/RiskScenarios"
            className="NavLink"
            style={{ color: "blue", fontSize: "30px", marginRight: "10px" }}
          >
            RiskScenarios
          </NavLink>
          <button
            className="add-risk-button"
            onClick={handleOpenForm}
            style={{
              width: "250px",
              marginLeft: "900px",
              height: "50px",
              marginTop: "2px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Add Risk Scenarios
          </button>
        </div>
        <div className="options-row">
          <Search />
          <Sort />
          <FilterSection />
        </div>
        <div className="risk-scenarios-container">
          <Scenes />
        </div>
      </div>
      {isFormOpen && (
        <CreateRiskForm isOpen={isFormOpen} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default RiskScenarios;
