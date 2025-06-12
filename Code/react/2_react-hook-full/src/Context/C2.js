import React, { useContext } from "react";
import { ValContext } from "../Appcontextapi";

function C2() {
  const { val } = useContext(ValContext);
  return <div>Val is used here {val}</div>;
}

export default C2;
