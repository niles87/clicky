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

  handleClick = (id, clicked) => {
    if (clicked === true) {
      // restart game and send message

      let newScooby = this.shuffle(
        this.state.scooby.map((character) => {
          if (character.clicked) {
            character.clicked = false;
          }
          return character;
        })
      );
      console.table(newScooby);
      let newScore = 0;
      this.setState({
        scooby: newScooby,
        score: 0,
        bestScore: this.state.bestScore,
        message: "That's incorrect!",
      });
      console.log(this.state);
      // console.log(
      //   "%c Why arent you working!!!!!",
      //   "color:#bada55; font-size:40px; background:red;"
      // );
    } else {
      // create a new array with the clicked character.clicked changed to true
      let newScooby = this.state.scooby.map((character) => {
        if (character.id === id) {
          character.clicked = !character.clicked;
        }
        return character;
      });
      newScooby = this.shuffle(newScooby);
      console.log(newScooby, "line 57 else statement");
      let newScore = this.state.score + 1;
      // bestScore handler
      let newBestScore;
      if (newScore <= this.state.bestScore) {
        return;
      } else {
        newBestScore = this.state.bestScore + 1;
      }

      this.setState({
        scooby: newScooby,
        score: newScore,
        bestScore: newBestScore,
        message: "That's correct! Guess again.",
      });
      // console.log("State while all guesses are new", this.state);
    }
  };

  render() {
    return (
      <>
        <Navbar score={this.state.score} bestScore={this.state.bestScore} />
        <Header notification={this.state.message} />
        {/* <Header /> */}
        <div className="card-container">
          {this.shuffle(
            this.state.scooby.map((character) => (
              <Card
                onClick={this.handleClick}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                clicked={character.clicked}
              />
            ))
          )}
        </div>
      </>
    );
  }
}

export default Body;
