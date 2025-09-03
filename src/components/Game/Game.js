import React from "react";
import "./styles.css";

// components
import TypewriterEffect from "../TypeWriterEffect/TypeWriterEffect";

// helpers
import { introduction } from "../../helpers/story";

const Game = () => {

  return (
    <div className="game-container">
      <TypewriterEffect text={introduction} speed={20} />
    </div>
  );
};

export default Game;