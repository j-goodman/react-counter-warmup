import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1)
  }

  const multiplyByTwo = () => {
    setCount(count * 2)
  }

  return (
    <div className="App">
      <div className="number">{count}</div>
      <div className="buttons-container">
        <div onClick={addOne} className="counter-button">+1</div>
        <div onClick={multiplyByTwo} className="counter-button blue">x2</div>
      </div>
    </div>
  );
}

export default App;