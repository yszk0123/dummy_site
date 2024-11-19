'use client'
import React, { useState, useEffect } from 'react';

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="current-time">
      <div>{currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</div>
    </div>
  );
};

export default CurrentTime;
