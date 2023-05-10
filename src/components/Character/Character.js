import React from 'react';
import "./styles.css";

const Character = ({ playerName, playerStats, equippedItems }) => {

  const { health, strength, agility, attackPower } = playerStats;

  // health: 100, strength: 10, agility: 5, attackPower: 5

  return (
    <div className='character-container'>
      <div></div>
      <p className="character-hero-name">Adventurer: {playerName}</p>
      <h3>Health: {health}</h3>
      <h3>Strength: {strength}</h3>
      <h3>Agility: {agility}</h3>
      <h3>Attack Power: {attackPower}</h3>

      <div>{equippedItems}</div>
    </div>
  );
};

export default Character;