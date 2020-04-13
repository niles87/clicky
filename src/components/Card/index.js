import React from "react";
// import image from "../../images";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      onClick={() => props.onClick(props.id, props.clicked)}
      data-clicked={props.clicked}
      data-id={props.id}
    >
      <div className="img-container">
        <img src={process.env.PUBLIC_URL + props.image} className="card-img" alt={props.name} />
      </div>
    </div>
  );
}

export default Card;
