import React from "react";

const Message = ({ gameStatus }) => {
  if (gameStatus === "playing") return null;

  return (
    <div className="message">
      <h2>{gameStatus === "won" ? "🎉 You Won!" : "❌ Game Over!"}</h2>
    </div>
  );
};

export default Message;
