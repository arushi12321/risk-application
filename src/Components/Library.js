import React, { useEffect } from "react";
import Nav from "./Nav";
import { Card, CardContent, Typography } from "@mui/material";
import "../Css-Files/Library.css";
import { IoDiamondOutline } from "react-icons/io5";
import { MdAssessment } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { useProductContext } from "../Context/RiskContext";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Library = () => {
  const { isLoading, scenarios } = useProductContext();
  const [total, setTotal] = useState(0);
  const [published, setPublished] = useState(0);
  const [draft, setDraft] = useState(0);
  const [disabled, setDisabled] = useState(0);
  const getCount = (scenarios) => {
    console.log(scenarios);
    setTotal(scenarios.length);
    const arraypublished = scenarios.filter((scene) => {
      return scene.col1 === "Published";
    });
    setPublished(arraypublished.length);
    const arraydraft = scenarios.filter((scene) => {
      return scene.col1 === "Draft";
    });
    setDraft(arraydraft.length);
    const arraydisabled = scenarios.filter((scene) => {
      return scene.col1 === "Disabled";
    });
    setDisabled(arraydisabled.length);
  };
  useEffect(() => {
    getCount(scenarios);
  }, [scenarios]);
  if (isLoading) {
    return <div> ......Loading </div>;
  }
  return (
    <div>
      <Nav />
      <div className="risk-library-container">
        {/* Row 1: RiskLibrary Card */}
        <div className="row">
          <NavLink to="/library/RiskScenarios" className="NavLink">
            <Card className="card">
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ fontWeight: "bold" }}
                >
                  <RiFileListLine
                    style={{ marginRight: "8px", marginTop: "16px" }}
                  />
                  Risk Scenarios
                </Typography>
                <Typography style={{ marginTop: "30px", color: "grey" }}>
                  Anticipate and address potential cybersecurity risks to
                  business
                </Typography>
                <hr style={{ marginTop: "38px" }}></hr>
                <div className="count-row">
                  <Typography color="textSecondary" gutterBottom>
                    All Scenarios: {total}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Published: {published}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Disabled: {disabled}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Draft: {draft}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </NavLink>
          {/* Assessment Card */}
          <NavLink to="/assessment" className="NavLink">
            <Card className="card">
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ fontWeight: "bold" }}
                >
                  <MdAssessment
                    style={{ marginRight: "8px", marginTop: "5px" }}
                  />
                  Assessments
                </Typography>
                <Typography style={{ marginTop: "30px", color: "grey" }}>
                  Assess risk scenarios to identify net risk scores
                </Typography>
                <hr style={{ marginTop: "38px" }}></hr>
              </CardContent>
            </Card>
          </NavLink>
        </div>

        {/* Row 2: Report Card */}
        <div className="row">
          <NavLink to="/reports" className="NavLink">
            <Card className="card report-card">
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ fontWeight: "bold" }}
                >
                  <IoDiamondOutline
                    style={{ marginRight: "8px", marginTop: "5px" }}
                  />
                  Reports
                </Typography>
                <Typography style={{ marginTop: "30px", color: "grey" }}>
                  Generate reports for the business and security leaders
                </Typography>
                <hr style={{ marginTop: "38px" }}></hr>
              </CardContent>
            </Card>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Library;
