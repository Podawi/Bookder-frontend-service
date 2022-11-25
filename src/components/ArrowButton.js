import React from "react";
import arrow from "../assets/arrow.jpg";

const ArrowButton = () => {
  return (
    <button className="App-button" onClick={() => alert("halko")}>
      <img src={arrow} alt="arrow" />
    </button>
  );
};

export default ArrowButton;
