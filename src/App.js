import React from "react";
import "./bootstrap.min.css";
import Home from "./Home.js";
import Register from "./Register.js";
import Login from "./Login.js";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <b>Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  <b>Register</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <b>Login</b>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
