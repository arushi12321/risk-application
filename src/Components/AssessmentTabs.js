import React, { useState } from "react";
import "../Css-Files/AssessmentTabs.css";
import BothTabs from "./BothTabs";
// import { useRiskAssessmentContext } from '../Context/RiskAssessmentContext';
const AssessmentTab = ({ selectedRisk }) => {
  const [selectedTab, setSelectedTab] = useState("likelihood");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="assessment-tab">
      <h3>Risk Scenario: {selectedRisk["Risk Scenario"]}</h3>
      <div className="section">
        <div className="tabs">
          <div
            className={`tab ${selectedTab === "likelihood" ? "selected" : ""}`}
            onClick={() => handleTabClick("likelihood")}
          >
            Likelihood Score
          </div>
          <div
            className={`tab ${
              selectedTab === "businessImpact" ? "selected" : ""
            }`}
            onClick={() => handleTabClick("businessImpact")}
          >
            Business Impact Score
          </div>
        </div>
      </div>
      <BothTabs selrisk={selectedRisk} selectedTab={selectedTab} />
    </div>
  );
};

export default AssessmentTab;
