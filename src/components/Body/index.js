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
    message: "Click an image to start!",
  };

  shuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  };

  componentDidMount() {
    this.setState({ scooby: this.shuffle(this.state.scooby) });
  }

  correctGuess = (id) => {
    // create a new array with the clicked character.clicked changed to true
    let newScooby = this.state.scooby.map((character) => {
      if (character.id === id) {
        character.clicked = !character.clicked;
      }
      return character;
    });

    let newScore = this.state.score + 1;

    // bestScore handler
    let newBestScore = this.state.bestScore;
    if (!(newScore <= newBestScore)) {
      newBestScore++;
    }

    // set the new state after each correct guess
    this.setState({
      scooby: this.shuffle(newScooby),
      score: newScore,
      bestScore: newBestScore,
      message: "That's correct! Guess again.",
    });
  };

  incorrectGuess = (newBestScore) => {
    let newScooby = this.state.scooby.map((character) => {
      if (character.clicked) {
        character.clicked = false;
      }
      return character;
    });

    this.setState({
      scooby: this.shuffle(newScooby),
      score: 0,
      message: "That's incorrect!",
      bestScore: newBestScore,
    });
  };

  handleClick = (id, clicked) =>
    clicked ? this.incorrectGuess(this.state.bestScore) : this.correctGuess(id);

  render() {
    return (
      <>
        <Navbar score={this.state.score} bestScore={this.state.bestScore} />
        <Header notification={this.state.message} />
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
