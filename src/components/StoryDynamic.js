import React, { useState, useEffect } from "react";

import text from "../assets/data";

const StoryDynamic = () => {
  const [para1, setPara1] = useState("");
  const [para2, setPara2] = useState("");
  const [para3, setPara3] = useState("");
  const [para4, setPara4] = useState("");
  const [para5, setPara5] = useState("");

  useEffect(() => {
    setPara1(text[0].para1);
    setPara2(text[0].para2);
    setPara3(text[0].para3);
    setPara4(text[0].para4);
    setPara5(text[0].para5);
  }, []);
  return (
    <div>
      <h1>{para1}</h1>
      <h1>{para2}</h1>
      <h1>{para3}</h1>
      <h1>{para4}</h1>
      <h1>{para5}</h1>
    </div>
  );
};

export default StoryDynamic;
