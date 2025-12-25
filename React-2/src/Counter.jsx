import { useState } from "react";

function init() {
  console.log("init done");
  return Math.random();
}

export default function Counter() {
  const [count, setCount] = useState(init);
  console.log("component re-rendered");

  function increaseCount() {
    setCount((c) => {
      return c + 1;
    });
  }
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}
