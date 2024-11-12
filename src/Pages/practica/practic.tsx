import React, { useState } from "react";
import "../../StyleCss/calc.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEvaluate = () => {
    try {
      const evaluateResult = eval(input);
      setInput(evaluateResult.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>Apple</h2>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result !== null ? `=${result}` : ""}</div>
      </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleInput(num.toString())}>
            {num}
          </button>
        ))}
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} onClick={() => handleInput(op)}>
            {op}
          </button>
        ))}
        <button onClick={handleEvaluate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
