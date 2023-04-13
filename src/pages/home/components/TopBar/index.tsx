import React from "react";
import "./style.css";
function TopBar() {
  return (
    <header id="top-bar">
      <div className="wrapper">
        <nav id="links">
          <div className="top-bar-link">
            <a href="#">Matches</a>
          </div>
          <div className="top-bar-link">
            <a href="#">Results</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default TopBar;
