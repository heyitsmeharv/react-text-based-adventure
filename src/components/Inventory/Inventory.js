import React from 'react';

const Inventory = ({ items, onUse }) => {
  return (
    <div>
      <h2>Inventory:</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} ({item.description})
              {item.usable && (
                <button onClick={() => onUse(item)}>Use</button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your inventory is empty.</p>
      )}
    </div>
  );
};

export default Inventory;