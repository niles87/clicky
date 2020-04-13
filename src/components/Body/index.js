import React, { Component } from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Card from "../Card";
import scooby from "../../scooby.json";
import "./style.css";

class Body extends Component {
  state = {
    scooby: scooby,
    score: 0,
    bestScore: 0,
  };

  shuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  };

  handleClick = (id, chosen) => {
    let clicked = this.state.scooby.map((character) => {
      if (character.id === id) {
        character.clicked = true;
      }
      return character;
    });
    console.table(clicked);
    let scoobyChars = this.shuffle(clicked);
    this.setState({ scooby: scoobyChars });
  };

  render() {
    return (
      <>
        <Navbar score={this.state.score} bestScore={this.state.bestScore} />
        <Header />
        <div className="card-container">
          {this.state.scooby.map((character) => (
            <Card
              onClick={this.handleClick}
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
