import React from 'react';

const Room = ({ room, description, items, inventory, onInteract, onNavigate }) => {
  return (
    <div>
      <p>{description}</p>
      {items.length > 0 && (
        <div>
          <p>Items in the room:</p>
          <ul>
            {items.filter(item => !inventory.includes(item)).map((item, index) => (
              <li key={index}>
                {item.name} ({item.description})
                <button onClick={() => onInteract(item)}>Pick up</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={onNavigate}>Look around</button>
    </div>
  );
};

export default Room;