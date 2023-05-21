import React from 'react';
import "./styles.css";

// components
import Item from "../Item/Item";

const Inventory = ({ items, equippedItems, onUse }) => {
  return (
    <div className='inventory-container'>
      {items.length > 0 ? (
        <ul className='inventory-list'>
          {items.map((item, index) => (
            <li key={index} className='inventory-list-item'>
              <Item name={item.name} img={item.image} description={item.description} />
              <button className="inventory-button" onClick={() => onUse(item)}>{(item.slot === 'consumable') ? ('Consumable') : ((item.slot === 'usable') ? ('Use') : ('Equip'))}</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className='inventory-text'>Your inventory is empty.</p>
      )}
    </div >
  );
};

export default Inventory;