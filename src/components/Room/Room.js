import React from 'react';
import "./styles.css";

// components
import Item from '../Item/Item';
import Hover from '../Hover/Hover';
import StatBar from '../Character/StatBar';

const Room = ({ room, description, items, enemies, inventory, onInteract, onNavigate, onLootRoom }) => {
  console.log('room', room);
  console.log('items', items);
  return (
    <div className='room-container'>
      <div className='room-scenario'>
        <div className='room-description'>
          <h1 className="room-text-header">{room.name}</h1>
          <span className="room-text">{description}</span>
        </div>
        <div className='room-items'>
          {/* {items.length > 0 && items.every(i => i.taken === false) ? (
            <>
              <ul className='room-item-list'>
                {items.filter(item => !inventory.includes(item)).map((item, index) => (
                  <li key={index} className='room-list-item'>
                    <button className="room-item-button" onClick={() => onInteract(item)}>
                      <Item onClick={() => onInteract(item)} name={item.name} img={item.image} description={item.description} />
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="room-text">There are no items in this room.</p>
          )} */}
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