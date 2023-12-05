import React, { useRef, useState, useEffect } from 'react';

const TimerComponent = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null); // Used to store the interval ID

  // Function to start the timer
  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
  };

  // Function to pause the timer
  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Resetting the ref
    }
  };

  // Function to reset the timer
  const resetTimer = () => {
    pauseTimer(); // First, pause the timer
    setTimer(0); // Then reset the timer value
  };

  useEffect(() => {
    startTimer(); // Start timer when component mounts
    return () => pauseTimer(); // Clear interval on unmount
  }, []);

  return (
    <div>
      <p>Timer: {timer} seconds</p>
      <button onClick={pauseTimer}>Pause Timer</button>
      <button onClick={startTimer}>Resume Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default TimerComponent;
