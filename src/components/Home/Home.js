import React, { useState } from "react";
import Card from "../Card/Card";

import "./home.css";

const Home = () => {
  const data = "Start Quiz";
  const [display, setDisplay] = useState(false);
  const [right, setRight] = useState(false);

  const startHandler = () => {
    setDisplay(true);
  };

  const childToParent = (childData) => {
    setRight(childData);
    if (right) {
      setDisplay(false);
    }
  };

  return (
    <div className="home">
      {!display && (
        <button
          className="btn"
          onClick={() => {
            startHandler();
          }}
        >
          {data}
        </button>
      )}

      {display && <Card childToParent={childToParent} />}
    </div>
  );
};

export default Home;
