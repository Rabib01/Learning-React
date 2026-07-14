import "./App.css";
import { useState } from "react";

function App() {
  // let count = 0;///
  // old State hooks

  const [count, setCount] = useState(0);

  const addToCount = function () {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const subFromCount = function () {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div id="center">
      <h4>The current count is ... </h4>
      <h1>{count}</h1>
      <div className="button-container">
        <button onClick={subFromCount}>-</button>
        <button onClick={addToCount}>+</button>
      </div>
    </div>
  );
}

export default App;
