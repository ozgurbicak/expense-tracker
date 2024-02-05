import { useState } from "react";
import "./App.css";
function App() {
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();
  const [randomNumber, setRandomNumber] = useState();

  const getRandomNumber = function () {
    const x = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    setRandomNumber(x);
  };

  return (
    <div className="hero">
      <div className="app-header">
        <div className="randomNum">
          <p>
            <span>Random Number:{randomNumber} </span>
          </p>
        </div>

        <div className="min">
          <p>Min:</p>
          <input
            type="number"
            onChange={(e) => setMinValue(e.target.value)}
          ></input>
        </div>

        <div className="max">
          <p>Max:</p>
          <input
            type="number"
            onChange={(e) => setMaxValue(e.target.value)}
          ></input>
        </div>

        <button className="random" onClick={getRandomNumber}>
          Get Random Number
        </button>
      </div>
    </div>
  );
}

export default App;
