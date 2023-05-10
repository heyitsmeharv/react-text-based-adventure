import React from 'react';
import "./styles.css";

// components
import HealthBar from "./HealthBar";

// images
import Strength from "../../resources/images/biceps.png";
import Health from "../../resources/images/heart-wings.png";
import Agility from "../../resources/images/body-balance.png";
import AP from "../../resources/images/sword-brandish.png";

const Character = ({ playerName, playerStats, equippedItems }) => {

  const { health, strength, agility, attackPower } = playerStats;

  return (
    <div className='character-container'>
      <div className='character-flex-container'>
        <h2 className="character-hero-stats">Stats</h2>
        <h2 className="character-hero-name">Adventurer: {playerName}</h2>
      </div>
      <div className='character-icon-wrapper'>
        <div className='character-stat-row'>
          <img alt='health' className='character-stat-icon' src={Health} />
          <HealthBar currentHealth={health} maxHealth={100} />
        </div>
        <div className='character-flex-icon-container'>
          <div className='character-stat-row'>
            <img alt='strength' className='character-stat-icon' src={Strength} />
            <p className="character-stat-text">
              {strength}
            </p>
          </div>
          <div className='character-stat-row'>
            <img alt='strength' className='character-stat-icon' src={Agility} />
            <p className="character-stat-text">
              {agility}
            </p>
          </div> <div className='character-stat-row'>
            <img alt='strength' className='character-stat-icon' src={AP} />
            <p className="character-stat-text">
              {attackPower}
            </p>
          </div>
        </div>
      </div>
      <div>{equippedItems}</div>
    </div>
  );
};

export default Character;