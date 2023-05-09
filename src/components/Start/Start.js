import React from "react";
import "./styles.css";

import { Text } from './Text';

const Start = ({ playerName, handlePlayerName, handleStartGame }) => {

  const text = Text;

  return (
    <>
      <div className="rain-container">
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
      </div>
      <div className="title-container">
        <h1 className="title">Text Based Adventure</h1>
        <div className="typewriter">
          <h1>{text[Math.floor(Math.random() * text.length)]}</h1>
        </div>
        <input className="input" placeholder="Enter Your Name" value={playerName} onChange={(e) => handlePlayerName(e)} />
        <button className="button" onClick={handleStartGame}>Enter</button>
      </div>
    </>
  );
};

export default Start;