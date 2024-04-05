import React, { useState } from "react";
import RiskScenarioList from "./RiskScenarioList";
import AssessmentTabs from "./AssessmentTabs";
import Nav from "./Nav";
import "../Css-Files/Assessment.css";
import { useFilterContext } from "../Context/FilterContext";
const Assessment = () => {
  const { filter_assessment_scenes } = useFilterContext();
  const [selectedRisk, setSelectedRisk] = useState(null);
  const [selectedRisks, setSelectedRisks] = useState([]);

  const handleSelectRisk = (risk) => {
    setSelectedRisk(risk);

    setSelectedRisks((prevSelectedRisks) => {
      if (prevSelectedRisks.includes(risk)) {
        return prevSelectedRisks.filter(
          (selectedRisk) => selectedRisk !== risk
        );
      } else {
        return [...prevSelectedRisks, risk];
      }
    });
  };

  return (
    <div className="assessment-container">
      <Nav />
      <div className="assessment-content">
        <div className="left-pane">
          <RiskScenarioList
            risks={filter_assessment_scenes}
            onSelectRisk={handleSelectRisk}
            selecteddRisk={selectedRisk}
            selectedRisks={selectedRisks}
          />
        </div>
        <div className="right-pane">
          {selectedRisk && <AssessmentTabs selectedRisk={selectedRisk} />}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
