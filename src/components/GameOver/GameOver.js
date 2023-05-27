import React from "react";
import "./styles.css";

const GameOver = ({ handleRestartGame }) => {

  return (
    <div className="game-over-container">
      <div className="title-container">
        <h1 className="start-title">Game Over, you lose.</h1>
        <button className="start-button" onClick={handleRestartGame}>Restart</button>
      </div>
    </div>
  );
};

export default GameOver;