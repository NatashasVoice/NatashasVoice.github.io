import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import Home2 from "./components/Home2";

import "./styles/App2.css";
import Blog from "./components/Story2";

function App2() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/story" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App2;
