import React, { useState, useEffect } from 'react';
import './styles.css';

const TypewriterEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const intervalId = setInterval(() => {

        setDisplayedText(prev => prev + text[index]);
        setIndex(prevIndex => prevIndex + 1);

        if (index + 1 === text.length) {
          clearInterval(intervalId);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }
  }, [index, text, speed]);
  return (
    <div className="scroll-container">
      <p>{displayedText}</p>
    </div>
  );
};

export default TypewriterEffect;