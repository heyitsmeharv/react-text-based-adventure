import React, { useState } from 'react';
import "./styles.css";

const Item = ({ name, img, description }) => {
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
      {isHovered && <div className="item-text"><div className="item-text-header">{name}</div>{description}</div>}
    </div>
  );
};

export default Item;
