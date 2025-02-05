import React from "react";
import classNames from "classnames";

const Grid = ({ guesses, word }) => {
  const getLetterClass = (letter, index) => {
    return classNames({
      green: word[index] === letter,
      yellow: word.includes(letter) && word[index] !== letter,
      gray: !word.includes(letter),
    });
  };

  return (
    <div className="grid">
      {guesses.map((guess, i) => (
        <div key={i} className="row">
          {guess.split("").map((letter, j) => (
            <span key={j} className={`tile ${getLetterClass(letter, j)}`}>
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
