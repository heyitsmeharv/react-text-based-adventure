import React, { useState } from 'react';
import "./styles.css";

const Item = ({ name, img, description, small }) => {
  const [isHovered, setIsHovered] = useState(false);

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
      {isHovered && name !== undefined && <div className={`item-text-container ${small ? 'small' : ''}`}>
        <div className="item-text-header">{name}</div><div className="item-text-description">{description}</div></div>}
    </div>
  );
};

export default Item;
