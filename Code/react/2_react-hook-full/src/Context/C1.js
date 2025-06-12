import React from "react";
import C2 from "./C2";

function C1() {
  return (
    <div>
      Parent component that don't use the props it just passes th props to the
      child component
      <h1>Use</h1>
      <C2 />
    </div>
  );
}

export default C1;
