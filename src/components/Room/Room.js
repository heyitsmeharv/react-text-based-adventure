import React from 'react';
import "./styles.css";

// components
import Item from '../Item/Item';

const Room = ({ room, description, items, enemies, inventory, onInteract, onNavigate }) => {
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
          {items.length > 0 && items.every(i => i.taken === false) ? (
            <>
              <h1 className="room-text-header">Items in the room:</h1>
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
          )}
          {/* TODO: FIX THIS */}
          {items.length > 0 && items.every(i => i.taken === true) &&
            <p className="room-text">You have looted this room.</p>
          }
        </div>
        <div className='room-enemies'>
          {enemies.length > 0 && enemies.every(i => i.killed === false) ? (
            <>
              <h1 className="room-text-header">Enemies in the room:</h1>
              <ul className='room-enemies-list'>
                {enemies.map((enemy, index) => (
                  <li key={index} className='room-list-enemy'>
                    <img className='room-item-image' alt={enemy.name} src={enemy.image} />
                    <span className="room-enemy-text">{enemy.name} - {enemy.description}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="room-text">There are no enemies in this room.</p>
          )}
          {/* TODO: FIX THIS */}
          {items.length > 0 && items.every(i => i.taken === true) &&
            <p className="room-text">You have looted this room.</p>
          }
        </div>
      </div>
      <div className='room-options'>
        <button className="room-button" onClick={onNavigate}>Look around</button>
      </div>
    </div>
  );
};

export default Room;