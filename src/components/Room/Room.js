import React from 'react';
import "./styles.css";

const Room = ({ room, description, items, inventory, onInteract, onNavigate }) => {
  console.log('room', room);
  return (
    <div className='room-container'>
      <div className='room-scenario'>
        <h1>{room.name}</h1>
        <span className="room-text">{description}</span>
        <div className='room-items'>
          {items.length > 0 && (
            <div>
              <h1 className="room-text-header">Items in the room:</h1>
              <ul>
                {items.filter(item => !inventory.includes(item)).map((item, index) => (
                  <li key={index}>
                    <span className="room-text">{item.name} - ({item.description})</span>
                    <button className="room-button-item" onClick={() => onInteract(item)}>Pick up</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className='room-options'>
        <button className="room-button" onClick={onNavigate}>Look around</button>
      </div>
    </div>
  );
};

export default Room;