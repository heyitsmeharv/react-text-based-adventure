import React, { useState } from 'react';
import "./styles.css";

const Intro = ({ playerName }) => {

  return (
    <div className='container'>
      <div className="scrolling-container">
        <div className="scrolling-text">
          Welcome to this text based adventure, {playerName}. In this adventure, you must try and survive until the very end where you will face a boss level. Good luck.
        </div>
      </div>
    </div>
  );
};

export default Intro;
