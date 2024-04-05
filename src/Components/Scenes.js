import React, { useState, useEffect } from "react";
import { useFilterContext } from "../Context/FilterContext";
import "../Css-Files/Scenes.css";
import { Card, Typography, CardContent, Switch } from "@mui/material";
import { FaCheck } from "react-icons/fa";

const Scenes = () => {
  const { filter_scenes } = useFilterContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [scenesPerPage] = useState(3);

  const indexOfLastScene = currentPage * scenesPerPage;
  const indexOfFirstScene = indexOfLastScene - scenesPerPage;
  const currentScenes = filter_scenes.slice(
    indexOfFirstScene,
    indexOfLastScene
  );

  const [scenarioStatus, setScenarioStatus] = useState({});

  useEffect(() => {
    const initialStatus = {};
    filter_scenes.forEach((scenario) => {
      initialStatus[scenario.id] = scenario.col1;
    });
    console.log("initialStatus:", initialStatus);
    setScenarioStatus(initialStatus);
  }, [filter_scenes]);

  const handleStatusChange = (event, scenario) => {
    const newStatus = scenario.col1 === "Published" ? "Disabled" : "Published";
    console.log("Status changed:", newStatus, scenario);
    setScenarioStatus((prevStatus) => ({
      ...prevStatus,
      [scenario.id]: newStatus,
    }));
    scenario.col1 = newStatus;
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="risk-cards-container">
      {currentScenes.map((scenario, index) => (
        <Card key={index} className="risk-card">
          <CardContent>
            <div className="blue-row">
              <Typography variant="body1">{scenario["Risk ID"]}</Typography>
              <Card sx={{ width: "200px" }}>
                <Typography variant="body1">
                  {scenario["Tag Key"]}: {scenario["Tag Value"]}
                </Typography>
              </Card>
              {scenario.col1 === "Draft" ? (
                <Card sx={{ width: "150px", color: "#150E7F" }}>
                  <Typography variant="body1">
                    <FaCheck />
                    Draft
                  </Typography>
                </Card>
              ) : (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Switch
                    checked={scenarioStatus[scenario.id] === "Published"}
                    onChange={(event) => handleStatusChange(event, scenario)}
                    color={
                      scenarioStatus[scenario.id] === "Published"
                        ? "primary"
                        : "error"
                    }
                  />
                  <Typography variant="body1">
                    {scenarioStatus[scenario.id]}
                  </Typography>
                </div>
              )}
            </div>
            <div className="white-row">
              <Typography variant="body1">
                {scenario["Risk Scenario"]}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="pagination-buttons">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastScene >= filter_scenes.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Scenes;
