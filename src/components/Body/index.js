import React, { Component } from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Card from "../Card";
import scooby from "../../scooby.json";
import "./style.css";

class Body extends Component {
  state = {
    scooby,
    score: 0,
    bestScore: 0,
  };

  handleClick = () => {};

  render() {
    return (
      <>
        <Navbar score={this.state.score} bestScore={this.state.bestScore} />
        <Header />
        <div className="card-container">
          {this.state.scooby.map((character) => (
            <Card
              handleClick={this.handleClick}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              clicked={character.clicked}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Body;
