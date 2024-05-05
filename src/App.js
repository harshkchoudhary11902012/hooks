import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickDown = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickDown}>-</button>
    </div>
  );
};

export default App;
