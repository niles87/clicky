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

  shuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  };

  handleClick = (id, bool) => {
    console.log(bool);
    if (bool) {
      // restart game and send message
      return;
    } else {
      // create a new array with the clicked character.clicked changed to true
      let newScooby = this.state.scooby.map((character) => {
        if (character.id === id) {
          character.clicked = true;
        }
        return character;
      });

      newScooby = this.shuffle(newScooby);
      let newScore = this.state.score + 1;
      let newBestScore = this.state.bestScore + 1;
      this.setState({ scooby: newScooby, score: newScore, bestScore: newBestScore });
    }
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
