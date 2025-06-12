import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
// import App from "./App";
import Memo from "./Memo/Memo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Memo />
  </React.StrictMode>
);
