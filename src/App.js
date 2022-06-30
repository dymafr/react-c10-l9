import React, { useState, memo } from 'react';
import Calendar from './Calendar';

export default function App() {
  console.log('Rendu App');
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);

  return (
    <>
      <input
        className="m-10"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Calendar count={count} />
    </>
  );
}
