import React from 'react';
import "./styles.css";

// components
import StatBar from "./StatBar";
import Item from "../Item/Item";

// images
import Stats from "../../resources/images/histogram.png";
import Strength from "../../resources/images/biceps.png";
import Health from "../../resources/images/heart-wings.png";
import Agility from "../../resources/images/body-balance.png";
import AP from "../../resources/images/sword-brandish.png";
import Empty from "../../resources/images/square.png";
import Equipment from "../../resources/images/battle-gear.png";

const Character = ({ playerName, playerStats, equippedItems, flash }) => {
  const [{ health, strength, agility, attackPower }] = playerStats;
  const [{ helmet, cape, shoulders, weapon, chest, gloves, boots, legs, ring }] = equippedItems;
  
  return (
    <div className='character-container'>
      <div className='character-equipment-wrapper-text-top'>
        <Item name="Player Stats" img={Stats} description="" small={true} />
        <h2 className="character-heading-text">{playerName}</h2>
      </div>
      <div className='character-icon-wrapper'>
        <div className='character-stat-row'>
          <Item name="Health" img={Health} description="" small={true} />
          <StatBar currentStatPercentage={health} maxPercentage={100} />
        </div>
        <div className='character-stat-row'>
          <Item name="Strength" img={Strength} description="" small={true} />
          <StatBar currentStatPercentage={strength} maxPercentage={30} />
        </div>
        <div className='character-stat-row'>
          <Item name="Agility" img={Agility} description="" small={true} />
          <StatBar currentStatPercentage={agility} maxPercentage={20} />
        </div>
        <div className='character-stat-row'>
          <Item name="Attack Power" img={AP} description="" small={true} />
          <StatBar currentStatPercentage={attackPower} maxPercentage={100} />
        </div>
      </div>
      <div className="character-equipment-wrapper">
        <div className='character-equipment-wrapper-text-bottom'>
          <Item name="Equipped Items" img={Equipment} description="" small={true} />
        </div>
        <div className='character-equipment'>
          <div className={`shoulder ${flash.slot === 'shoulders' && flash.value ? 'flash' : ''}`} >
            <Item name={shoulders?.name} img={shoulders?.image ? shoulders?.image : Empty} description={shoulders?.description} />
          </div>
          <div className={`helmet ${flash.slot === 'helmet' && flash.value ? 'flash' : ''}`} >
            <Item name={helmet?.name} img={helmet?.image ? helmet?.image : Empty} description={helmet?.description} />
          </div>
          <div className={`cape ${flash.slot === 'cape' && flash.value ? 'flash' : ''}`} >
            <Item name={cape?.name} img={cape?.image ? cape?.image : Empty} description={cape?.description} />
          </div>
          <div className={`weapon ${flash.slot === 'weapon' && flash.value ? 'flash' : ''}`} >
            <Item name={weapon?.name} img={weapon?.image ? weapon?.image : Empty} description={weapon?.description} />
          </div>
          <div className={`chest ${flash.slot === 'chest' && flash.value ? 'flash' : ''}`} >
            <Item name={chest?.name} img={chest?.image ? chest?.image : Empty} description={chest?.description} />
          </div>
          <div className={`gloves ${flash.slot === 'gloves' && flash.value ? 'flash' : ''}`} >
            <Item name={gloves?.name} img={gloves?.image ? gloves?.image : Empty} description={gloves?.description} />
          </div>
          <div className={`boots ${flash.slot === 'boots' && flash.value ? 'flash' : ''}`} >
            <Item name={boots?.name} img={boots?.image ? boots?.image : Empty} description={boots?.description} />
          </div>
          <div className={`legs ${flash.slot === 'legs' && flash.value ? 'flash' : ''}`} >
            <Item name={legs?.name} img={legs?.image ? legs?.image : Empty} description={legs?.description} />
          </div>
          <div className={`ring ${flash.slot === 'ring' && flash.value ? 'flash' : ''}`} >
            <Item name={ring?.name} img={ring?.image ? ring?.image : Empty} description={ring?.description} />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Character;