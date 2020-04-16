import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="jumbo-wrapper">
      <h1>Clicky Game!!!</h1>
      <h3>{props.notification}</h3>
    </div>
  );
}

export default Header;
