import React from 'react';
import "./styles.css";

// images
import Bag from "../../resources/images/light-backpack.png";

const Inventory = ({ items, onUse }) => {
  return (
    <div className='inventory-container'>
      <div className='inventory-wrapper-text'>
        <img alt='player stats' className='inventory-icon' src={Bag} />
        <h2 className="inventory-heading-text">Inventory</h2>
      </div>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} ({item.description})
              {/* {item.usable && (
                <button onClick={() => onUse(item)}>Use</button>
              )} */}
              <button onClick={() => onUse(item)}>Use</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your inventory is empty.</p>
      )
      }
    </div >
  );
};

export default Inventory;