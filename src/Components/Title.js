import React from "react";
import ToggleMode from "./ToggleMode";
import "./Title.css";

const Title = ({ themeToggler, theme }) => {
  return (
    <div className="title-container">
      <p className="title-text">Alexandra Goma</p>
      <ToggleMode themeToggler={themeToggler} theme={theme} />
    </div>
  );
};

export default Title;
