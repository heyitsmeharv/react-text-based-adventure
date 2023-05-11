import React from "react";

const StatBar = ({ currentStatPercentage, maxPercentage }) => {
  const statPercentage = (currentStatPercentage / maxPercentage) * 100;

  let statColor = '';

  if (statPercentage >= 70) {
    statColor = 'green';
  } else if (statPercentage >= 30) {
    statColor = 'yellow';
  } else {
    statColor = 'red';
  }

  const statBarStyle = {
    width: `${statPercentage}%`,
    backgroundColor: statColor,
    height: '35px',
  };

  return (
    <div className="stat-bar">
      <div style={statBarStyle} className="stat-bar-fill" />
    </div>
  );
};

export default StatBar;