import React, { useMemo, useState } from "react";
import HeaveCompute from "./HeaveCompute";
import HeaveCompute1 from "./HeavyCompute1";

function Memo() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }

  const options = useMemo(() => {
    return { show: true, text: "Using Memeo" };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>

      <br />
      <br />
      <br />
      <HeaveCompute show={true} />
      <br />
      <br />
      <br />
      <HeaveCompute1 options={{ show: true, text: "Using Memeo" }} />
      <br />
      <br />
      <br />
      <HeaveCompute1 options={options} />
    </div>
  );
}

export default Memo;
