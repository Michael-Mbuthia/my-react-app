import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <h1> Count is:{count} </h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}
