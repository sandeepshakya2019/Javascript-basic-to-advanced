import React, { useReducer } from "react";
import { reducer } from "./Reucer/useReducer";

function Appreducer() {
  const [state, dispatch] = useReducer(reducer, { a: 0 });
  return (
    <div>
      Sate {state.a}
      <br />
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <br />
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </div>
  );
}

export default Appreducer;
