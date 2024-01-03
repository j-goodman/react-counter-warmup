import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="number">{count}</div>
      <div className="buttons-container">
        <div className="counter-button">+1</div>
        <div className="counter-button blue">x2</div>
      </div>
    </div>
  );
}

export default App;
