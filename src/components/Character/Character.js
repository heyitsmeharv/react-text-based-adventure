import React from 'react';
import "./styles.css";

// components
import StatBar from "./StatBar";

// images
import Stats from "../../resources/images/histogram.png";
import Strength from "../../resources/images/biceps.png";
import Health from "../../resources/images/heart-wings.png";
import Agility from "../../resources/images/body-balance.png";
import AP from "../../resources/images/sword-brandish.png";
import Empty from "../../resources/images/square.png";
import Equipment from "../../resources/images/battle-gear.png";

const Character = ({ playerName, playerStats, equippedItems }) => {

  console.log('equippedItems', equippedItems);

  const { health, strength, agility, attackPower } = playerStats;
  const [{ helmet, cape, shoulders, weapon, chest, gloves, boots, legs, ring }] = equippedItems;


  return (
    <div className='character-container'>
      <div className='character-equipment-wrapper-text-top'>
        <img alt='player stats' className='character-stat-icon' src={Stats} />
        <h2 className="character-heading-text">{playerName}</h2>
      </div>
      <div className='character-icon-wrapper'>
        <div className='character-stat-row'>
          <img alt='health' className='character-stat-icon' src={Health} />
          <StatBar currentStatPercentage={health} maxPercentage={100} />
        </div>
        <div className='character-stat-row'>
          <img alt='strength' className='character-stat-icon' src={Strength} />
          <StatBar currentStatPercentage={strength} maxPercentage={100} />
        </div>
        <div className='character-stat-row'>
          <img alt='agility' className='character-stat-icon' src={Agility} />
          <StatBar currentStatPercentage={agility} maxPercentage={100} />
        </div>
        <div className='character-stat-row'>
          <img alt='attackPower' className='character-stat-icon' src={AP} />
          <StatBar currentStatPercentage={attackPower} maxPercentage={100} />
        </div>
      </div>
      <div className="character-equipment-wrapper">
        <div className='character-equipment-wrapper-text-bottom'>
          <img alt='equipped items' className='character-stat-icon' src={Equipment} />
          <h2 className="character-heading-text">Equipped Items</h2>
        </div>
        <div className='character-equipment'>
          <div className='shoulder'>
            <img alt='shoulder' className='character-stat-icon' src={shoulders ? shoulders : Empty} />
          </div>
          <div className='helmet'>
            <img alt='helmet' className='character-stat-icon' src={helmet ? helmet : Empty} />
          </div>
          <div className='cape'>
            <img alt='cape' className='character-stat-icon' src={cape ? cape : Empty} />
          </div>
          <div className='weapon'>
            <img alt='weapon' className='character-stat-icon' src={weapon ? weapon : Empty} />
          </div>
          <div className='chest'>
            <img alt='chest' className='character-stat-icon' src={chest ? chest : Empty} />
          </div>
          <div className='gloves'>
            <img alt='gloves' className='character-stat-icon' src={gloves ? gloves : Empty} />
          </div>
          <div className='boots'>
            <img alt='boots' className='character-stat-icon' src={boots ? boots : Empty} />
          </div>
          <div className='legs'>
            <img alt='legs' className='character-stat-icon' src={legs ? legs : Empty} />
          </div>
          <div className='ring'>
            <img alt='ring' className='character-stat-icon' src={ring ? ring : Empty} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;