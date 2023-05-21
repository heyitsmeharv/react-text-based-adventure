import React, { useState } from 'react';
import "./styles.css";

const Hover = ({ header, description, img }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`hover-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className='hover-image' alt={description} src={img} />
      {isHovered && header !== undefined && <div className='hover-text-container'>
        <h2 className='hover-text-header'>{header}</h2><span className='hover-text-description'>{description}</span></div>}
    </div>
  );
};

export default Hover;
