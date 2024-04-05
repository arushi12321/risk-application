// Register.js
import React, { useState } from "react";
import axios from "axios";
import "../Css-Files/Login.css"; // Import CSS styles

const Register = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Username, setEmail] = useState("");
  const [col1, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = async () => {
    try {
      await axios.post("https://retoolapi.dev/CEN1vT/api1", {
        FirstName,
        LastName,
        Username,
        col1
      });
      setSuccess(true);
    } catch (error) {
      setError("Error registering user.");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={Username}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={col1}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">User registered successfully.</div>}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
