import React, { Component } from "react";
import { generate } from "random-words";
import Grid from "./components/Grid";
import WordInput from "./components/WordInput";
import Message from "./components/Message";
import "./App.css";

class Wordle extends Component {
  state = {
    word: this.getRandomWord(),
    guesses: [],
    currentGuess: "",
    attempts: 6,
    gameStatus: "playing",
    darkMode: false,
  };

  getRandomWord() {
    let word;
    do {
      word = generate({ exactly: 1, maxLength: 5 })[0].toUpperCase();
    } while (word.length !== 5);
    return word;
  }

  handleInputChange = (value) => {
    if (value.length <= 5) {
      this.setState({ currentGuess: value.toUpperCase() });
    }
  };

  handleGuess = () => {
    const { currentGuess, word, guesses, attempts } = this.state;
    if (currentGuess.length !== 5) return;

    const updatedGuesses = [...guesses, currentGuess];

    this.setState({
      guesses: updatedGuesses,
      currentGuess: "",
      gameStatus:
        currentGuess === word
          ? "won"
          : updatedGuesses.length >= attempts
          ? "lost"
          : "playing",
    });
  };

  handleNewGame = () => {
    this.setState({
      word: this.getRandomWord(),
      guesses: [],
      currentGuess: "",
      gameStatus: "playing",
    });
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const { guesses, currentGuess, gameStatus, darkMode, word } = this.state;
    return (
      <div className={`wordle-container ${darkMode ? "dark" : ""}`}>
        
        <h1><span>Wordle Clone</span></h1>
        <button onClick={this.toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
        
        {gameStatus === "lost" &&<p className="word" >{word}</p>}
        <Message gameStatus={gameStatus} />

        <Grid guesses={guesses} word={this.state.word} />

        {gameStatus === "playing" && (
          <WordInput
            currentGuess={currentGuess}
            onInputChange={this.handleInputChange}
            onSubmit={this.handleGuess}
          />
        )}

        <button onClick={this.handleNewGame} className="new-game-btn">
          New Game
        </button>
      </div>
    );
  }
}

export default Wordle;
