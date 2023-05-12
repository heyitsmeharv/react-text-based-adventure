import React from 'react';
import "./styles.css";

// components
import Item from "../Item/Item";

// images
import Bag from "../../resources/images/light-backpack.png";

const Inventory = ({ items, equippedItems, onUse }) => {
  return (
    <div className='inventory-container'>
      <div className='inventory-wrapper-text'>
        <img alt='player stats' className='inventory-icon' src={Bag} />
        <h2 className="inventory-heading-text">Inventory</h2>
      </div>
      {items.length > 0 ? (
        <ul className='inventory-list'>
          {items.map((item, index) => (
            <li key={index} className='inventory-list-item'>
              <Item name={item.name} img={item.image} description={item.description} />
              {/* <img className='inventory-item-image' alt={item.name} src={item.image} />
              <span className="inventory-item-text">{item.name}</span> */}
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