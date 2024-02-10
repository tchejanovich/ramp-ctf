import { useState, useEffect } from 'react';

const ANIMATION_DELAY = 500;

const TypewriterText = ({ text }) => {
  const [index, setIndex] = useState(0);
  const charsToDisplay = text.substring(0, index).split('');

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => setIndex(index + 1), ANIMATION_DELAY);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <ul>
      {charsToDisplay.map((char, i) => (
        <li key={i}>{char}</li>
      ))}
    </ul>
  );
};

export default TypewriterText;
