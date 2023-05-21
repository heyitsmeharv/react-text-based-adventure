import React, { useState } from 'react';
import "./styles.css";

const Item = ({ name, img, description, small }) => {
  const [isHovered, setIsHovered] = useState(false);

  console.log('item - ', name, img, description, small);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`item-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="item-image" alt={name} src={img} />
      {isHovered && name !== undefined && <div className={`item-text ${small ? 'small' : ''}`}>
        <div className="item-text-header">{name}</div>{description}</div>}
    </div>
  );
};

export default Item;
