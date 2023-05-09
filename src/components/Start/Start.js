import React from "react";
import "./styles.css";

const Start = ({ playerName, handlePlayerName, handleStartGame }) => {
  const text = [
    'Hello, and welcome to this text based adventure.',
    'Do you have what it takes?',
    'Please lower all expectations.',
    'Beware, Spooky Ghost!',
    'Can you navigate all the way to the end?'
  ];

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
        <h1 className="title"> Text Based Adventure</h1>
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