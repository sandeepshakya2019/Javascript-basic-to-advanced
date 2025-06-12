import React, { createContext, useState } from "react";
import C1 from "./Context/C1";
import C3 from "./Context/C3";
export const ValContext = createContext();

function App() {
  const [val, setval] = useState(0);

  return (
    <ValContext.Provider value={{ val: val }}>
      <h1>Context API</h1>
      <button onClick={() => setval(val + 1)}>
        Click here to change the state
      </button>
      <C3 />
      <C1 />
    </ValContext.Provider>
  );
}

export default App;
