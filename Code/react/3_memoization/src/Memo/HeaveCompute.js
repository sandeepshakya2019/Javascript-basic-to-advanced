import React, { memo, useState } from "react";

const HeaveCompute = memo(function ({ show }) {
  const [show1, setShow] = useState(show);
  return (
    <div
      style={{
        display: "grid",
        gap: "20px",
        flexWrap: "true",
      }}
    >
      <button onClick={() => setShow(!show1)}>Show</button>

      {show1 &&
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

export default HeaveCompute;
