import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar" id="navbar">
        <h5 className="navbar-brand ">Clicky Game</h5>
        <h3>Click an image to start!</h3>
        <div>
          <h5 className="user-score">
            Current Score: {props.score} ~ Best Score: {props.bestScore}
          </h5>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
