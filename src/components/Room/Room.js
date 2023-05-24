import React from 'react';
import "./styles.css";

// components
import Hover from '../Hover/Hover';
import StatBar from '../Character/StatBar';
import Loot from '../Loot/Loot';

// images
import Backpack from "../../resources/images/light-backpack.png";

const Room = ({ room, description, items, enemies, inventory, onInteract, onNavigate, onLootRoom, onOpenLoot, isLoot, onToggleLoot }) => {
  console.log('room', room);
  console.log('items', items);
  return (
    <div className='room-container'>
      <div className='room-scenario'>
        {onOpenLoot && (
          <Loot items={items} inventory={inventory} onInteract={onInteract} />
        )}
        {isLoot && items.length > 0 && items.every(i => i.taken === false) && (
          <div className='loot-button-container'>
            <button className={`loot-button ${isLoot ? 'isLoot' : ''}`} onClick={onToggleLoot}>
              <img alt='inventory' className='inventory-icon' src={Backpack} />
            </button>
          </div>
        )}
        <div className='room-description'>
          <h1 className="room-text-header">{room.name}</h1>
          <span className="room-text">{description}</span>
        </div>

        <div className='room-enemies'>
          {enemies.length > 0 && enemies.every(i => i.killed === false) && (
            <>
              <div className='room-enemy-container'>
                {enemies.map((enemy, index) => (
                  <div key={index} className='room-enemy-wrapper'>
                    {/* <span className="room-enemy-text">{enemy.name} - {enemy.description}</span> */}
                    <StatBar currentStatPercentage={enemy.stats.health} maxPercentage={enemy.stats.health} />
                    <Hover header={enemy.name} description={enemy.description} img={enemy.image} size="large" />
                    {/* <img className='room-enemy-image' alt={enemy.name} src={enemy.image} /> */}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className='room-options'>
        {enemies.length === 0 &&
          <button button className="room-button" onClick={onNavigate}>Look around</button>
        }
        <button className="room-button" onClick={onLootRoom}>Loot the room</button>
        {enemies.length > 0 &&
          <>
            <button className="room-button" onClick={onNavigate}>Escape</button>
            <button className="room-button" onClick={onNavigate}>Attack</button>
          </>
        }
      </div>
    </div >
  );
};

export default Room;