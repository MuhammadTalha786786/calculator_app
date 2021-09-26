import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clear = () => {
    setResult("");
  };
  const backSpaces = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const Calculation = () => {
    try {
      setResult(eval(result).toString());
    } catch (e) {
      setResult("error");
    }
  };
  return (
    <>
      <div className="Container">
        <form action="">
          <input type="text" value={result} />
        </form>
        <div className="KeyPad">
          <button className="Highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="Highlight" onClick={backSpaces} id="backSpaces">
            C
          </button>
          <button className="Highlight" value="/" onClick={handleClick}>
            &divide;
          </button>
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button className="Highlight" value="*" onClick={handleClick}>
            &times;
          </button>
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button className="Highlight" value="-" onClick={handleClick}>
            &ndash;
          </button>
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button className="Highlight" value="+" onClick={handleClick}>
            +
          </button>
          <button value="0" onClick={handleClick}>
            0
          </button>
          <button className="Highlight" value="." onClick={handleClick}>
            .
          </button>
          <button
            className="Highlight"
            id="result"
            value="="
            onClick={Calculation}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
