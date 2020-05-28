import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div className="App">
      <h1>{count}</h1>
      <p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </p>
    </div>
  );
}

export default App;
