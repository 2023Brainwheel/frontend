import React, { useEffect, useState } from 'react';
import '../css/Countdown.css';

const Counter = () => {
  const [count, setCount] = useState(5);
  const [isIncreasing, setIsIncreasing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isIncreasing) {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 5));
      } else {
        setCount((prevCount) => (prevCount < 5 ? prevCount + 1 : 1));
      }
    }, 1000);

    if (count === 2) {
      setIsIncreasing(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [count, isIncreasing]);

  useEffect(() => {
    // Start the countdown 0.5 seconds earlier
    const timeout = setTimeout(() => {
      setIsIncreasing(true);
    }, 1910);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="counterDown-container">
      <div className="counterDown">{count}</div>
    </div>
  );
};

export default Counter;
