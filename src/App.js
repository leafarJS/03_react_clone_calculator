import { useState } from "react";
import "./App.css";
import logo from "./assets/freecodecamp-logo.png";
import Button from "./components/Button";
import Clear from "./components/Clear";
import Display from "./components/Display";
import { evaluate } from "mathjs";

const initialState = "";

function App() {
  const [input, setInput] = useState(initialState);

  const handleClick = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput(initialState);
  };
  const handleResult = () => {
    if (input.length < 3) {
      window.alert("You must insert at least 3 values");
    }
    if (input) {
      setInput(evaluate(input));
    } else {
      window.confirm("insert a value to calculate the result");
    }
  };
  return (
    <div className="App">
      <div className="container-logo">
        <img className="logo" src={logo} alt="logo freeCodeCamp" />
      </div>
      <div className="container-calculator">
        <Display input={input} />
        <div className="line">
          <Button handleClick={handleClick}>1</Button>
          <Button handleClick={handleClick}>2</Button>
          <Button handleClick={handleClick}>3</Button>
          <Button handleClick={handleClick}>+</Button>
        </div>
        <div className="line">
          <Button handleClick={handleClick}>4</Button>
          <Button handleClick={handleClick}>5</Button>
          <Button handleClick={handleClick}>6</Button>
          <Button handleClick={handleClick}>-</Button>
        </div>
        <div className="line">
          <Button handleClick={handleClick}>7</Button>
          <Button handleClick={handleClick}>8</Button>
          <Button handleClick={handleClick}>9</Button>
          <Button handleClick={handleClick}>*</Button>
        </div>
        <div className="line">
          <Button handleClick={handleResult}>=</Button>
          <Button handleClick={handleClick}>0</Button>
          <Button handleClick={handleClick}>.</Button>
          <Button handleClick={handleClick}>/</Button>
        </div>
        <Clear handleClear={handleClear}>Clear</Clear>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default App;
