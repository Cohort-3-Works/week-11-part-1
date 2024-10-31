import { useState } from "react";

import "./App.css";

//let create our first custom hook

function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount,
  };
}

function App() {
  const { count, increaseCount } = useCounter();

  return (
    <>
      <button onClick={increaseCount}>increase {count}</button>
    </>
  );
}

export default App;