import React, { useCallback, useMemo, useState } from "react";
import SlowComponent from "./Optimization/SlowComponent";
import OptimizedSlowCom from "./Optimization/OptimizedSlowCom";
import OptimizedSlowComFun from "./Optimization/OptimizedSlowComFun";

function Appoptimization() {
  const [val, setval] = useState(0);

  const optmizedObj = useMemo(() => {
    return { a: 1 };
  }, []);

  const doesNotRender = useCallback(function () {
    console.log("Print");
  }, []);

  function doesNotRender1() {
    console.log("Print");
  }

  return (
    <div>
      <button onClick={() => setval(val + 1)}>update val {val}</button>
      This is the example of using the memo, useMemo, useCallBack function
      <SlowComponent val={1} />
      <OptimizedSlowCom val={{ a: 1 }} op={"doesnot optimize the object"} />
      <OptimizedSlowCom
        val={optmizedObj}
        op={"optimize the object user Memo"}
      />
      <OptimizedSlowComFun
        val={optmizedObj}
        doesNotRender={doesNotRender1}
        op={"optimize object not funtion"}
      />
      <OptimizedSlowComFun
        val={optmizedObj}
        doesNotRender={doesNotRender}
        op={"optimize object and funtion useMemo, useCallback"}
      />
    </div>
  );
}

export default Appoptimization;
