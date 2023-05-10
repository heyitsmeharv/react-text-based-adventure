import React from 'react';
import "./styles.css";

const Room = ({ room, description, items, inventory, onInteract, onNavigate }) => {
  console.log('room', room);
  return (
    <div className='room-container'>
      <h1>{room.name}</h1>
      <span className="room-text">{description}</span>
      {items.length > 0 && (
        <div>
          <p className="room-text">Items in the room:</p>
          <ul>
            {items.filter(item => !inventory.includes(item)).map((item, index) => (
              <li key={index}>
                {item.name} ({item.description})
                <button className="room-button" onClick={() => onInteract(item)}>Pick up</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className="room-button" onClick={onNavigate}>Look around</button>
    </div>
  );
};

export default Room;