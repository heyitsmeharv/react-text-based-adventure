import React from "react";
import "./styles.css";

const Start = ({ playerName, handlePlayerName, handleStartGame }) => {
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
        <input className="input" placeholder="Enter Your Name" value={playerName} onChange={(e) => handlePlayerName(e)} />
        <button className="button" onClick={handleStartGame}>Enter</button>
      </div >
    </>
  );
};

export default Start;