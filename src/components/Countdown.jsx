import React, { useEffect, useState } from 'react';
import '../css/Countdown.css';

const Counter = () => {
  const [count, setCount] = useState(5);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isIncreasing) {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 5));
      } else {
        setCount((prevCount) => (prevCount < 5 ? prevCount + 1 : 1));
      }
    }, 1000);
  
    // 여기에 로직을 이동
    /*if (count === 2) {
      setIsIncreasing(true);
    }*/
  
    return () => {
      clearInterval(interval);
    };
  }, [isIncreasing]); // `count` 의존성을 제거

  useEffect(() => {
    // Start the countdown 0.5 seconds earlier
    const timeout = setTimeout(() => {
      setIsIncreasing(true);
    }, 1000);

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
