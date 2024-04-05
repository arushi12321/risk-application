import React, { useState } from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Card, CardContent } from "@mui/material";
import "../Css-Files/Report.css";
import { useRiskAssessmentContext } from "../Context/RiskAssessmentContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
const Reports = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

  const { assessedScenes, updateSummaries, Summary1 } =
    useRiskAssessmentContext();
  const handleClickss = () => {
    console.log(inputValue1, inputValue2, inputValue3);
    updateSummaries(inputValue1, inputValue2, inputValue3);
    console.log(Summary1);
  };
  const sortedScenes = [...assessedScenes].sort(
    (a, b) => b["Net Risk Score"] - a["Net Risk Score"]
  );
  const top10Scenarios = sortedScenes.slice(0, 10);
  const data1 = top10Scenarios.map((scenario, index) => ({
    name: `RS ${index + 1}`,
    score: scenario["Net Risk Score"],
  }));
  console.log(data1);

  const COLORS = {
    Rare: "#043D1E",
    Periodic: "#FFEB3B",
    Frequent: "#2196F3",
    Often: "#C25905",
    Always: "#F44336",
  };

  const COLORS1 = {
    "Very Low": "#043D1E",
    Low: "#FFEB3B",
    Medium: "#2196F3",
    High: "#C25905",
    Critical: "#F44336",
  };
  const legendData = [
    { color: COLORS.Always, label: "Always" },
    { color: COLORS.Frequent, label: "Frequent" },
    { color: COLORS.Often, label: "Often" },
    { color: COLORS.Periodic, label: "Periodic" },
    { color: COLORS.Rare, label: "Rare" },
  ];

  const legendData1 = [
    { color: COLORS1["Very Low"], label: "Very Low" },
    { color: COLORS1["Low"], label: "Low " },
    { color: COLORS1["Medium"], label: "Medium" },
    { color: COLORS1["High"], label: "High" },
    { color: COLORS1["Critical"], label: "Critical" },
  ];
  const CustomLegend = () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      {legendData.map(({ color, label }) => (
        <div
          key={label}
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: color,
              marginRight: "5px",
            }}
          />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
  const CustomLegend1 = () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      {legendData1.map(({ color, label }) => (
        <div
          key={label}
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: color,
              marginRight: "5px",
            }}
          />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p style={{ color: "#000", fontWeight: "bold", fontSize: "25px" }}>
            {`${payload[0].payload.likelihood} : ${payload[0].value}`}
          </p>
        </div>
      );
    }

    return null;
  };

  const CustomTooltip1 = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p style={{ color: "#000", fontWeight: "bold", fontSize: "25px" }}>
            {`${payload[0].payload.business} : ${payload[0].value}`}
          </p>
        </div>
      );
    }

    return null;
  };

  const likelihoodFrequency = assessedScenes.reduce((acc, scene) => {
    acc[scene["Likelihood Score Text"]] =
      (acc[scene["Likelihood Score Text"]] || 0) + 1;
    return acc;
  }, {});
  const likelihoodData = Object.entries(likelihoodFrequency).map(
    ([likelihood, frequency]) => ({
      likelihood,
      value: frequency,
    })
  );

  const businessFrequency = assessedScenes.reduce((acc, scene) => {
    acc[scene["Business Impact Score Text"]] =
      (acc[scene["Business Impact Score Text"]] || 0) + 1;
    return acc;
  }, {});
  const businessFrequencyData = Object.entries(businessFrequency).map(
    ([business, frequency]) => ({
      business,
      value: frequency,
    })
  );
  return (
    <div className="report-page">
      <Nav />
      <div className="report-container">
        <div className="first-row">
          <NavLink to="/library" style={{ marginRight: "15px" }}>
            <FaArrowLeft style={{ fontSize: "30px" }} />
          </NavLink>
          <span style={{ fontSize: "30px", marginRight: "10px" }}>Report</span>
        </div>
        <div className="card-row">
          <Card className="cards">
            <div
              style={{
                backgroundColor: "#DFF4F6",
                height: "40px",
                textAlign: "left",
                paddingLeft: "20px",
                fontSize: "30px",
              }}
            >
              Top 10 Risk Scenarios
            </div>
            <CardContent>
              <ResponsiveContainer width="100%" height={310}>
                <BarChart
                  data={data1}
                  margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis
                    dataKey="name"
                    label={{
                      value: "Scenario",
                      position: "insideRight",
                      offset: 150,
                      dy: 19,
                    }}
                  />
                  <YAxis
                    dataKey="score"
                    label={{
                      value: "Net Risk Score",
                      angle: -90,
                      position: "insideLeft",
                      offset: -10,
                      dy: 80,
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="cards">
            <div
              style={{
                backgroundColor: "#DFF4F6",
                height: "40px",
                textAlign: "left",
                paddingLeft: "20px",
                fontSize: "30px",
              }}
            >
              Risk Scenarios By Likelihood
            </div>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={likelihoodData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                  >
                    {likelihoodData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[entry.likelihood]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend content={<CustomLegend />} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="cards">
            <div
              style={{
                backgroundColor: "#DFF4F6",
                height: "40px",
                textAlign: "left",
                paddingLeft: "20px",
                fontSize: "30px",
              }}
            >
              Risk Scenarios By Business Impact
            </div>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={businessFrequencyData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                  >
                    {businessFrequencyData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS1[entry.business]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip1 />} />
                  <Legend content={<CustomLegend1 />} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        <div className="card-row">
          <Card className="cards">
            <div
              style={{
                backgroundColor: "#DFF4F6",
                height: "40px",
                textAlign: "left",
                paddingLeft: "20px",
                fontSize: "30px",
              }}
            >
              Summary
            </div>
            <CardContent>
              <input
                type="text"
                placeholder="Enter your text here..."
                style={{
                  width: "500px",
                  padding: "17px",
                  fontSize: "16px",
                  height: "250px",
                  backgroundColor: "#E7E4E3",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
                value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)}
              />
            </CardContent>
          </Card>
          <Card className="cards">
            <div
              style={{
                backgroundColor: "#DFF4F6",
                height: "40px",
                textAlign: "left",
                paddingLeft: "20px",
                fontSize: "30px",
              }}
            >
              Summary
            </div>
            <CardContent>
              <input
                type="text"
                placeholder="Enter your text here..."
                style={{
                  width: "500px",
                  padding: "17px",
                  fontSize: "16px",
                  height: "250px",
                  backgroundColor: "#E7E4E3",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
              />
            </CardContent>
          </Card>
          <Card className="cards">
            <div
              style={{
                backgroundColor: "#DFF4F6",
                height: "40px",
                textAlign: "left",
                paddingLeft: "20px",
                fontSize: "30px",
              }}
            >
              Summary
            </div>
            <CardContent>
              <input
                type="text"
                placeholder="Enter your text here..."
                style={{
                  width: "500px",
                  padding: "17px",
                  fontSize: "16px",
                  height: "250px",
                  backgroundColor: "#E7E4E3",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
                value={inputValue3}
                onChange={(e) => setInputValue3(e.target.value)}
              />
            </CardContent>
          </Card>
        </div>
        <div
          className="last-row"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button style={{ width: "150px" }} onClick={handleClickss}>
            Save and Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
