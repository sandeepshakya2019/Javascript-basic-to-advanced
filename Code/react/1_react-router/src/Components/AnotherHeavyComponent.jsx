import React from "react";

function AnotherHeavyComponent() {
    for (let i = 0; i < 1000000000; i++);

    return (
        <div
            style={{ border: "1px solid red", padding: "10px", margin: "10px" }}
        >
            AnotherHeavyComponent
        </div>
    );
}

export default React.memo(AnotherHeavyComponent);
