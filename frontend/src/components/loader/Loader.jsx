import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div id="loader">
      <div id="loader-container">
        <div id="loader-container-ring"></div>
        <div id="loader-container-ring"></div>
        <div id="loader-container-ring"></div>
        <div id="loader-container-ring"></div>
        <div id="loader-container-h3">loading...</div>
      </div>
    </div>
  );
};

export default Loader;
