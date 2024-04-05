import React, { useState } from "react";
import axios from "axios";
import "../Css-Files/Login.css";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router";
// import { Box } from '@mui/material';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.get("https://retoolapi.dev/CEN1vT/api1");
      console.log(response);
      const userData = response.data;

      const userExists = userData.some(
        (user) => user.Username === email && user.col1 === password
      );
 
      if (userExists) {
        console.log(userExists);
        navigate("/home");
      } else {
        setError("User not found.");
      }
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div>
      <div className="container">
        <h2>Log In to BluOcean</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button onClick={handleLogin}>Login</button>
        <div className="register-link">
          <span>Want to know more About BluOcean? </span>
          <NavLink to="/register">Register Here</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
