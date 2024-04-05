import React, { useState } from "react";
import "../Css-Files/CreateRiskForm.css";
import { useProductContext } from "../Context/RiskContext";
const CreateRiskForm = ({ isOpen, onClose }) => {
  const { addScenarios } = useProductContext();
  const [formData, setFormData] = useState({
    riskScenario: "",
    riskDescription: "",
    riskField1: "",
    riskField2: "",
    key: "",
    value: "",
    stat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSaveAsDraft = () => {
    const updatedFormData = { ...formData, stat: "Draft" };
    setFormData(updatedFormData);

    addScenarios(updatedFormData);
    onClose();
  };

  const handlePublish = () => {
    const updatedFormData = { ...formData, stat: "Published" };
    setFormData(updatedFormData);

    addScenarios(updatedFormData);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content create-risk-form">
        <div className="form-container">
          <h2 style={{ width: "500px" }}>Add Risk Scenario</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Risk Scenario *</label>
              <input
                type="text"
                name="riskScenario"
                value={formData.riskScenario}
                onChange={handleChange}
                required
                placeholder="Enter Risk Scenario"
              />
            </div>
            <div className="form-group">
              <label>Risk Description</label>
              <input
                type="text"
                name="riskDescription"
                value={formData.riskDescription}
                onChange={handleChange}
                placeholder="Enter Risk Description"
              />
            </div>
            <div className="form-group-row">
              <div className="form-group">
                <label>Risk Field 1</label>
                <input
                  type="text"
                  name="riskField1"
                  value={formData.riskField1}
                  onChange={handleChange}
                  placeholder="Enter Risk Field-1"
                />
              </div>
              <div className="form-group">
                <label>Risk Field 2</label>
                <input
                  type="text"
                  name="riskField2"
                  value={formData.riskField2}
                  onChange={handleChange}
                  placeholder="Enter Risk Field-2"
                />
              </div>
            </div>
            <div className="form-group-row">
              <div className="form-group">
                <label style={{ marginBottom: "10px" }}>Key</label>
                <select
                  name="key"
                  value={formData.key}
                  onChange={handleChange}
                  placeholder="Select Key"
                  style={{
                    width: "190px",
                    borderRadius: "9px",
                    border: "1px solid #ccc",
                    color: "grey",
                    height: "35px",
                    padding: "8px",
                  }}
                >
                  <option value="">Select Key</option>
                  <option value="Industry">Industry</option>
                  <option value="Domain">Domain</option>
                  <option value="Client">Client</option>
                </select>
              </div>
              <div className="form-group">
                <label>Value</label>
                <input
                  type="text"
                  name="value"
                  value={formData.value}
                  onChange={handleChange}
                  placeholder="Enter Value"
                />
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="cancel-button">
                Cancel
              </button>
              <button
                type="button"
                className="save-button"
                onClick={handleSaveAsDraft}
              >
                Save as Draft
              </button>
              <button
                type="button"
                className="publish-button"
                onClick={handlePublish}
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRiskForm;
