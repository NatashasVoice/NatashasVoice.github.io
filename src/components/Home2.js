import React, { useState, useEffect } from "react";
import text from "../assets/data";
import Story2 from "../components/Story2";
import Footer from "./Footer";
import Home from "./Home";

const Home2 = () => {
  return (
    <div>
      <Home />
      <Story2 />
    </div>
  );
};

export default Home2;
