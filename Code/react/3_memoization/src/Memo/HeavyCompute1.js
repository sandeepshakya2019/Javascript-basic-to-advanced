import React, { memo, useState } from "react";

const HeaveCompute1 = memo(function ({ options }) {
  const [show, setShow] = useState(options.show);
  return (
    <div
      style={{
        display: "grid",
        gap: "20px",
        flexWrap: "true",
      }}
    >
      <button onClick={() => setShow(!show)}>Show</button>
      {options.text}
      {show &&
        Array.from(Array(5000).keys()).map((i) => {
          return (
            <div
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "20px",
              }}
            >
              <h1>{i}</h1>
            </div>
          );
        })}
    </div>
  );
});

export default HeaveCompute1;
