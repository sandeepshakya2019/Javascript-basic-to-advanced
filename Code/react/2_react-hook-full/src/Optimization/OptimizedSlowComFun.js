import React, { memo } from "react";

const OptimizedSlowComFun = memo(function ({ val, doesNotRender, op }) {
  return (
    <div onClick={doesNotRender}>
      New function based optimization {val.a} {op}
    </div>
  );
});

export default OptimizedSlowComFun;
