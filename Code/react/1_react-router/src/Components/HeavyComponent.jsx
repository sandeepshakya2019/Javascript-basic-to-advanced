import React, { useState } from "react";

function HeavyComponent() {
    const [slowCount, setSlowCount] = useState(0);

    for (let i = 0; i < 1000000000; i++);

    return (
        <div
            style={{ border: "1px solid red", padding: "10px", margin: "10px" }}
        >
            <h1>Heavy Components</h1>
            <h3>Slow Value : {slowCount} </h3>
            <button onClick={() => setSlowCount(slowCount + 1)}>+</button>
        </div>
    );
}

export default React.memo(HeavyComponent);
