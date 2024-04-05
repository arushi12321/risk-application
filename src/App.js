import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Register from "./Components/Register";
import User from "./Components/User";
import Library from "./Components/Library";
import Assessment from "./Components/Assessment";
import Reports from "./Components/Reports";
import { Navigate } from "react-router-dom";
import Chats from "./Components/Chats";
import RiskScenarios from "./Components/RiskScenarios";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/library" element={<Library />} />
          <Route path="/user" element={<User />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/library/RiskScenarios" element={<RiskScenarios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
