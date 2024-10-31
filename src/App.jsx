import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";

import "./App.css";

function App() {
  const posts = useFetch();
  return (
    <>
      {posts.title}
      <br />
      <Counter></Counter>
    </>
  );
}

function Counter() {
  const { count, increaseCount } = useCounter();

  return (
    <>
      <button onClick={increaseCount}>increase {count}</button>
    </>
  );
}

export default App;
