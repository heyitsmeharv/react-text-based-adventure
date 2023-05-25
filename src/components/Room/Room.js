import React from 'react';
import "./styles.css";

// components
import Hover from '../Hover/Hover';
import StatBar from '../Character/StatBar';
import Loot from '../Loot/Loot';
import Map from '../Map/Map';

// images
import Backpack from "../../resources/images/light-backpack.png";

const Room = ({ map, room, description, items, enemies, inventory, onInteract, onNavigate, onEscape, onAttack, onLootRoom, onOpenLoot, isLoot, onToggleLoot, lootedRoom, escapeAttempt }) => {
  console.log('room', room);
  console.log('items', items);
  return (
    <div className='room-container'>
      <div className='room-scenario'>
        <div className='room-map-container'>
          <Map map={map} currentRoom={room} />
        </div>
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
        {onOpenLoot && (
          <Loot items={items} inventory={inventory} onInteract={onInteract} />
        )}
        <div className='room-enemy-container'>
          {enemies.length > 0 && enemies.every(i => i.killed === false) && (
            <>
              <div className='room-enemies'>
                {enemies.map((enemy, index) => (
                  <div key={index} className='room-enemy-wrapper'>
                    <StatBar currentStatPercentage={enemy.stats.health} maxPercentage={enemy.stats.maxHealth} />
                    <Hover header={enemy.name} description={enemy.description} img={enemy.image} size="large" />
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
        {enemies.length > 0 &&
          <>
            <button className="room-button" onClick={onAttack}>Attack</button>
            <button className={`room-button ${escapeAttempt ? 'disabled' : ''}`} onClick={onEscape}>Escape</button>
          </>
        }
        <button className={`room-button ${lootedRoom ? 'disabled' : ''}`} onClick={onLootRoom}>Loot the room</button>
      </div>
    </div >
  );
};

export default Room;