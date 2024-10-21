import React, { useState, useEffect } from 'react';

const ColorChangingDiv = () => {
  // State to hold the current background color
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  // Function to generate a random hex color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // useEffect to handle the interval for changing the color
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundColor(getRandomColor());
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        color: 'white',
        backgroundColor: backgroundColor,
      }}
    >
      Background Color
    </div>
  );
};

export default ColorChangingDiv;
