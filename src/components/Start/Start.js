import React from "react";
import "./styles.css";

import { Text } from './Text';

const Start = ({ inputRef, handleStartGame }) => {
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
        <h1 className="start-title">Text Based Adventure</h1>
        <div className="typewriter">
          <h1>{text[Math.floor(Math.random() * text.length)]}</h1>
        </div>
        <input className="start-input" placeholder="Enter Your Name" type="text" ref={inputRef} />
        <button className="start-button" onClick={handleStartGame}>Enter</button>
      </div>
    </>
  );
};

export default Start;