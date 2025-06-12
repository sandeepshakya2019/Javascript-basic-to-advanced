import React, { memo } from "react";

const OptimizedSlowCom = memo(function ({ val, op }) {
  return (
    <div>
      OptimizedSlowCom {val.a} {op}
    </div>
  );
});

export default OptimizedSlowCom;
