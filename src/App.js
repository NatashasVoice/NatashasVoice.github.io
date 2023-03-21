import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Home, Story } from "./components";
import "./styles/App2.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
