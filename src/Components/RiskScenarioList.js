import React from "react";
import AssessmentSearch from "./AssessmentSearch";
import "../Css-Files/RiskScenarioList.css";
import { useRiskAssessmentContext } from "../Context/RiskAssessmentContext";
const RiskScenarioList = ({
  risks,
  onSelectRisk,
  selectedRisks,
  selecteddRisk,
}) => {
  console.log(selecteddRisk);
  const totalRisksCount = risks.length;
  const { likelihoodSelected, businessselected } = useRiskAssessmentContext();
  return (
    <div className="left-panes">
      <div className="top-heading">
        <h2>
          Risk Scenarios ({selectedRisks.length} / {totalRisksCount})
        </h2>
      </div>
      <div className="section">
        <AssessmentSearch />
        <h3>Likelihood Score</h3>
        <h3>Business Impact</h3>
      </div>
      <div className="risks-container">
        {risks.map((risk) => (
          <div
            key={risk.id}
            className={`risk-item ${
              selectedRisks.includes(risk) ? "selected" : ""
            }`}
          >
            <div
              onClick={() => onSelectRisk(risk)}
              style={{ fontWeight: "bold" }}
            >
              {risk["Risk Scenario"]}
            </div>
            <div className="buttons">
              <button
                className={likelihoodSelected === "true" ? "green-button" : ""}
              ></button>
              <button
                className={businessselected === "true" ? "green-button" : ""}
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskScenarioList;
