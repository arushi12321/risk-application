import React,{useState} from "react";
import { useRiskAssessmentContext } from "../Context/RiskAssessmentContext";
import SaveButton from "./SaveButton";
const BothTabs = ({ selrisk, selectedTab }) => {
  const {
    updateLikelihoodScore,
    updateBusinessimpactScore,
    updateScore,
    likelihoodSelected,
    businessselected,
  } = useRiskAssessmentContext();
  const likelihoodOptions = ["Rare", "Periodic", "Frequent", "Often", "Always"];
  const [likelihoodcolor,setlikelihoodColor]=useState("false");
  const businessImpactOptions = [
    "Very Low",
    "Low",
    "Medium",
    "High",
    "Critical",
  ];

  const handleLikelihoodOptionClick = (option) => {
    setlikelihoodColor(true);
    updateLikelihoodScore(selrisk, option);
  };
  const handleBusinessImpactOptionClick = (option) => {
    updateBusinessimpactScore(selrisk, option);
  };
  const handleClicks = () => {
    updateScore(selrisk);
  };

  return (
    <div>
      {selectedTab === "likelihood" ? (
        <div className="tab-content">
          {likelihoodOptions.map((option, index) => (
            <div
              key={index}
              className={`option ${likelihoodcolor==="true"?`selected`:""}`}
              onClick={() => handleLikelihoodOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      ) : (
        <div className="tab-content">
          {businessImpactOptions.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => handleBusinessImpactOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      {likelihoodSelected === "true" && businessselected === "true" ? (
        <SaveButton onClicks={handleClicks} />
      ) : (
        ""
      )}
    </div>
  );
};

export default BothTabs;
