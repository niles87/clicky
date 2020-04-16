import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div className="nav-container">
      <nav className="navbar" id="navbar">
        <h5 className="navbar-brand ">Clicky Game</h5>
        <div>
          <h5 className="user-score">
            Current Score: {props.score} - Best Score: {props.bestScore}
          </h5>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
