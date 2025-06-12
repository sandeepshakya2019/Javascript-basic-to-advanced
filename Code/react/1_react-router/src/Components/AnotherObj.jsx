import React, { memo } from "react";

function AnotherObj({ ob }) {
    for (let i = 0; i < 1000000000; i++);

    return (
        <div
            style={{ border: "1px solid red", padding: "10px", margin: "10px" }}
        >
            AnotherObj {ob.post}
        </div>
    );
}

export default memo(AnotherObj);
