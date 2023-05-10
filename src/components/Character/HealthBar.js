import React from "react";

const HealthBar = ({ currentHealth, maxHealth }) => {
  const healthPercentage = (currentHealth / maxHealth) * 100;

  let healthColor = '';

  if (healthPercentage >= 70) {
    healthColor = 'green';
  } else if (healthPercentage >= 30) {
    healthColor = 'yellow';
  } else {
    healthColor = 'red';
  }

  const healthBarStyle = {
    width: `${healthPercentage}%`,
    backgroundColor: healthColor,
    height: '30px',
  };

  return (
    <div className="health-bar">
      <div style={healthBarStyle} className="health-bar-fill">
        Health
      </div>
    </div>
  );
};

export default HealthBar;