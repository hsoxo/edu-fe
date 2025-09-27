"use client";

import React, { useEffect, useState } from "react";

type CounterProps = {
  target: number;   // 最终数值
  suffix?: string;  // 比如 "+" 或 "%"
  duration?: number; // 动画时长 (毫秒)
};

const Counter: React.FC<CounterProps> = ({ target, suffix = "", duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16); // 每帧增加的数值 (16ms ~ 60fps)

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
