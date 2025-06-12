import React from "react";

function C1({ count, setCount }) {
    return (
        <div
            style={{ border: "1px solid red", padding: "10px", margin: "10px" }}
        >
            <h3> C1 Count value : {count}</h3>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default C1;
