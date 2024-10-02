import React, { useState } from 'react';
import './Counter.css';  


const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter-wrapper">
      <h1 className="title">Counter App</h1>
      <div className="counter-display">
        <span>{count}</span>
      </div>
      <div className="button-group">
        <button onClick={increment} className="btn increment">+</button>
        <button onClick={decrement} className="btn decrement">-</button>
      </div>
    </div>
  );
};

export default Counter;
