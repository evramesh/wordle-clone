import React from "react";

const WordInput = ({ currentGuess, onInputChange, onSubmit }) => {
  return (
    <div className="word-input">
      <input
        type="text"
        value={currentGuess}
        onChange={(e) => onInputChange(e.target.value)}
        maxLength="5"
        className="input-box"
      />
      <button onClick={onSubmit} className="submit-btn">Submit</button>
    </div>
  );
};

export default WordInput;
