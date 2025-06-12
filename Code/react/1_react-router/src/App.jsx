import React, { useMemo, useState } from "react";
import C1 from "./Components/C1";
import C3 from "./Components/C3";
import HeavyComponent from "./Components/HeavyComponent";
import AnotherHeavyComponent from "./Components/AnotherHeavyComponent";
import AnotherObj from "./Components/AnotherObj";

function App() {
    const [count, setCount] = useState(0);
    // const ob = { post: "somepost" };
    const ob = useMemo(() => {
        return { post: "somepost" };
    }, []);
    return (
        <div>
            <C1 count={count} setCount={setCount} />
            <C3 />
            <HeavyComponent />
            <AnotherHeavyComponent />
            <AnotherObj ob={ob} />
        </div>
    );
}

export default App;
