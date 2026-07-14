import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addCount = function () {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const subCount = function () {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div id="center">
        <div className="h4">
          The current count is ...
          <h1>{count}</h1>
          <button onClick={addCount}>+</button>
          <button onClick={subCount}>-</button>
        </div>
      </div>
    </>
  );
}

export default App;
