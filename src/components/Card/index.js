import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" data-clicked={props.clicked} data-id={props.id}>
      <div className="img-container">
        <img src={props.image} className="card-img" alt={props.name} />
      </div>
    </div>
  );
}

export default Card;
