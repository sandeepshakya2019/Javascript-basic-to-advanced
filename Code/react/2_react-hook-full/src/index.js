import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Appcontextapi";
import Appoptimization from "./Appoptimization";
import Appreducer from "./Appreducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Appreducer />
  </React.StrictMode>
);
