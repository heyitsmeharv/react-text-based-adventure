import React from 'react';
import "./styles.css";

const Room = ({ room, description, items, inventory, onInteract, onNavigate }) => {
  console.log('room', room);
  console.log('items', items);
  return (
    <div className='room-container'>
      <div className='room-scenario'>
        <h1>{room.name}</h1>
        <span className="room-text">{description}</span>
        <div className='room-items'>
          <h1 className="room-text-header">Items in the room:</h1>
          {items.length > 0 ? (
            <ul className='room-item-list'>
              {items.filter(item => !inventory.includes(item)).map((item, index) => (
                <li key={index} className='room-list-item'>
                  <img className='room-item-image' alt={item.name} src={item.image} />
                  <span className="room-item-text">{item.name} - {item.description}</span>
                  <button className="room-button-item" onClick={() => onInteract(item)}>Pick up</button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="room-text">There are no items in this room.</p>
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