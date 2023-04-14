import React from "react";
import "./style.css";
import { useNavigate } from "react-router";
function TopBar() {
  const navigate = useNavigate();

  const navigateMatches = () => {
    navigate("/matches");
  };
  const navigateResults = () => {
    navigate("/results");
  };

  return (
    <header id="top-bar">
      <div className="wrapper">
        <nav id="links">
          <div className="top-bar-link" onClick={navigateMatches}>
            <a href="#">Matches</a>
          </div>
          <div className="top-bar-link" onClick={navigateResults}>
            <a href="#">Results</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default TopBar;
