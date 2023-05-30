import React from 'react';
import "./styles.css";

// components
import Item from "../Item/Item";

const Loot = ({ items, inventory, onInteract }) => {
  return (
    <div className='loot-container'>
      <ul className='loot-list'>
        {items.filter(item => !inventory.includes(item)).map((item, index) => (
          <li key={index} className='loot-item'>
            <button className="loot-item-button" onClick={() => onInteract(item)}>
              <Item onClick={() => onInteract(item)} name={item.name} img={item.image} description={item.description} small={true} />
            </button>
          </li>
        ))}
      </ul>
    </div >
  );
};

export default Loot;