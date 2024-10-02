import React, { useState, useEffect } from 'react';

const AnimatedStatistic = ({ end, label, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < end) {
          return prevCount + 1;
        }
        clearInterval(timer);
        return prevCount;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center p-4">
      <div className="text-2xl md:text-3xl font-semibold text-yellow-600">
        {count}{suffix}
      </div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  );
};

const StatisticsGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <AnimatedStatistic end={32} label="Company Associated" suffix="+" />
      <AnimatedStatistic end={3} label="Revenue generated" suffix="m+" />
      <AnimatedStatistic end={18} label="Successful projects" suffix="+" />
      <AnimatedStatistic end={85} label="Store Associated" suffix="+" />
    </div>
  );
};

export default StatisticsGrid;