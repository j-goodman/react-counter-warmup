import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(prevCount => prevCount + 1);
  }


  const multiplyByTwo = () => {
    setCount(count * 2)
  }


  return (
    <div className="App">
      <div className="number">{count}</div>
      <div className="buttons-container">
        <div className="counter-button" onClick={addOne}>+1</div>
        <div className="counter-button blue" onClick={multiplyByTwo}>x2</div>
      </div>
    </div>
  );
}

export default App;
