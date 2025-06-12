import { useReducer, useState } from "react";

function countReducerFun(currState, action) {
  switch (action.type) {
    case "INPUTSET":
      return (currState = action.payload);
    case "RESET":
      return (currState = 0);
    case "INC":
      return currState + 1;

    case "INCMUL":
      return currState + action?.payload;

    case "DEC":
      return currState - 1;

    case "DECMUL":
      return currState - action?.payload;

    default:
      return currState;
  }
}

function stepReducerFun(currState, action) {
  switch (action.type) {
    case "INPUTSET":
      return (currState = action.payload);

    case "RESET":
      return (currState = 0);

    default:
      return currState;
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const initialState = { count: 0, step: 1 };
  const [count, dispatchCount] = useReducer(
    countReducerFun,
    initialState.count
  );
  const [step, dispatchStep] = useReducer(stepReducerFun, initialState.step);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // dispatch({ type: "DEC" });
    dispatchCount({ type: "DECMUL", payload: step });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    // dispatch({ type: "INC" });
    dispatchCount({ type: "INCMUL", payload: step });

    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatchCount({ type: "INPUTSET", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatchStep({ type: "INPUTSET", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatchCount({ type: "RESET" });
    dispatchStep({ type: "RESET" });

    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
